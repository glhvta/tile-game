import { all, take, call, select, race, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GAME_START, GAME_END } from '../actionTypes';
import { levelSelector, tilesSelector } from '../selectors';
import { showLevelTask, checkTheAnswer, changeLevel } from './gameWorkerSaga';
import { startGameAction } from '../actions';

export function* watchGameStart() {
  while(true) {
    yield take(GAME_START);
    yield put(startGameAction());
    yield fork(startGame);
  } 
};

function* startGame() {
  yield race(
    yield fork(gameTask),
    yield call(delay, 2000)
  );
  yield put({type: GAME_END})
};

function* gameTask() {
  while(true) {
    const level = yield select(levelSelector);
    const tiles = yield select(tilesSelector);

    yield showLevelTask({tilesNumber : tiles.length, level});
    const isLevelPassed = yield checkTheAnswer();
    yield changeLevel(isLevelPassed);
  }
}

export default function* rootSaga() {
  yield all([
    watchGameStart(),
  ])
};
