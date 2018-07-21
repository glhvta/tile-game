import { take, put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { TILE_PRESSED } from '../actionTypes';
import { tilesToRememberSelector, levelSelector } from '../selectors';
import { activeTilesAction, nonActiveTilesAction, nextLevel, prevLevel, updateTilesAction, makeActiveOnPress} from '../actions';

export function* showLevelTask(levelInfo) {
  yield put(activeTilesAction(levelInfo));
  yield call(delay, 2000); //why is waiting one second more???!
  yield put(nonActiveTilesAction());
};

export function* checkTheAnswer() {
  const tilesToRemember = yield select(tilesToRememberSelector);
  let i = 0;

  for( i; i < tilesToRemember.length; i++) {
    const { index } = yield take(TILE_PRESSED);
    yield put(makeActiveOnPress(index));

    if(!tilesToRemember.includes(index)) {
      break;
    }
  };

  return i === tilesToRemember.length;
};

export function* changeLevel(isLevelPassed) {
  if (isLevelPassed) {
    yield put.resolve(nextLevel());
  } else {
    yield put.resolve(prevLevel());
  }

  const level = yield select(levelSelector);
  yield put(updateTilesAction(level));
}
