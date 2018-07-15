import { all, take, put, call, select, takeEvery, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GAME_START, TILE_PRESSED } from '../actionTypes';
import { activeTilesAction, nonActiveTilesAction, nextLevel, prevLevel, updateTilesAction } from '../actions';
import { tilesToRememberSelector, levelSelector, tilesSelector } from '../selectors/tile-game';

export function* watchGameStart() {
  while(true) {
    yield take(GAME_START);
    yield startGame();
  } 
};

function* startGame() {
  yield race(
    yield gameTask(),
    yield call(delay, 10000)
  );
};

function* gameTask() {
  while(true) {
    const level = yield select(levelSelector);
    const tiles = yield select(tilesSelector);

    yield showLevelTask({tilesNumber : tiles.length, level})
  }
}

function* showLevelTask(levelInfo) {
  yield makeTilesActive(levelInfo);
  yield checkTheAnswer();
}

function* makeTilesActive(levelInfo) {
  yield put(activeTilesAction(levelInfo));
  yield call(delay, 2000); //why is waiting 3000 to remove active tiles,if there is written 2000 to wait?!
  yield put(nonActiveTilesAction());
};

function* checkTheAnswer() {
  const tilesToRemember = yield select(tilesToRememberSelector);
  let i = 0;

  for( i; i < tilesToRemember.length; i++) {
    const { index } = yield take(TILE_PRESSED);
    
    if(!tilesToRemember.includes(index)) {
      break;
    }
  };
  
  if (i === tilesToRemember.length) {
    yield put(nextLevel());
  } else {
    yield put(prevLevel());
  }

  const level = yield select(levelSelector);//try to find better solution
  yield put(updateTilesAction(level));
};

export default function* rootSaga() {
  yield all([
    watchGameStart(),
  ])
};
