import {  takeLatest, call, select, race, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GAME_START } from '../actionTypes';
import { levelSelector } from '../selectors';
import { showLevelTask, checkTheAnswer, changeLevel } from './gameWorkerSaga';
import { endGameAction } from '../actions';

export function* watchGameStart() {
  yield takeLatest(GAME_START, startGame);
};

function* startGame() {
  yield race(
    yield fork(gameTask),
    yield call(delay, 30000)
  );

  yield put(endGameAction());
};

function* gameTask() {
  while(true) {
    const level = yield select(levelSelector);

    yield showLevelTask(level);
    const isLevelPassed = yield checkTheAnswer();
    yield changeLevel(isLevelPassed);
  }
}