import { all, take, call, select, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GAME_START } from '../actionTypes';
import { levelSelector, tilesSelector } from '../selectors/tile-game';
import { showLevelTask, checkTheAnswer, changeLevel } from './tileGameWorkerSagas';

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
