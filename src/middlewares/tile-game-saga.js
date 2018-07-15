import { all, take, put, call, select, takeEvery, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GAME_START, TILE_PRESSED, NEXT_LEVEL, PREVIOUS_LEVEL, UPDATE_TILES } from '../actionTypes';
import { activeTilesAction, nonActiveTilesAction, nextLevel, prevLevel } from '../actions';
import { tilesToRememberSelector } from '../selectors/tile-game';

export function* watchGameStart() {
  while(true) {
    const { payload } = yield take(GAME_START);
    yield startGame(payload);
  } 
};

function* startGame(payload) {
  yield race(
    yield gameTask(payload),
    yield call(delay, 10000)
  );
};

function* gameTask(payload) {
  while(true) {
    yield showLevelTask(payload)
  }
}

function* showLevelTask({length, level}) {
  yield makeTilesActive({length, level});
  yield checkTheAnswer();
}

function* makeTilesActive(payload) {
  yield put(activeTilesAction(payload));
  yield call(delay, 2000); //why is waiting 3000 to remove active tiles,if there is written 2000 to wait?!
  yield put(nonActiveTilesAction());
};

function* checkTheAnswer() {
  const tilesToRemember = yield select(tilesToRememberSelector);
  let i = 0;

  for( i; i < tilesToRemember.length; i++) {
    const { index } = yield take(TILE_PRESSED);
    console.log('pressed')
    if(!tilesToRemember.includes(index)) {
      break;
    }
  };
  
  if (i === tilesToRemember.length) {
    yield put(nextLevel());
  } else {
    yield put(prevLevel());
  }
};

function* watchUpdateLevel() {
  yield takeEvery([NEXT_LEVEL, PREVIOUS_LEVEL], (a,b,c) => {
    console.log (a,b,c)
    // yield put(UPDATE_TILES, )
  })
}

export default function* rootSaga() {
  yield all([
    watchGameStart(),
    watchUpdateLevel()
  ])
};
