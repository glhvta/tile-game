import { all, takeLatest, take, call, select, race, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GAME_START, GAME_END } from '../actionTypes';
import { levelSelector, tilesSelector } from '../selectors';
import { showLevelTask, checkTheAnswer, changeLevel } from './gameWorkerSaga';
import { endGameAction, firstLevelAction } from '../actions';

export function* watchGameStart() {
  yield takeLatest(GAME_START, startGame);
};

function* startGame() {
  yield race(
    yield fork(gameTask),
    yield call(delay, 20000)
  );

  yield put(endGameAction());
  yield put(firstLevelAction());
};

function* gameTask() {
  while(true) {
    const level = yield select(levelSelector);

    yield showLevelTask(level);
    const isLevelPassed = yield checkTheAnswer();
    yield changeLevel(isLevelPassed);
  }
}


export default function* rootSaga() {
  yield all([
    watchGameStart(),
  ])
};
