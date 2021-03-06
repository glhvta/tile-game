import {  takeLatest, call, select, race, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GAME_START } from '../actionTypes';
import { levelSelector } from '../selectors';
import { endGameAction } from '../actions';
import { secondsInGame } from '../constants';
import { showLevelTask, checkTheAnswer, changeLevel } from './gameWorkerSaga';

export function* watchGameStart() {
  yield takeLatest(GAME_START, startGame);
};

function* startGame() {
  yield race(
    yield fork(gameTask),
    yield call(delay, secondsInGame * 1000)
  );

  yield put(endGameAction());
};

function* gameTask() {
  while(true) {
    const level = yield select(levelSelector);

    yield call(showLevelTask, level);
    const isLevelPassed = yield call(checkTheAnswer);
    yield call(changeLevel, isLevelPassed);
  }
}
