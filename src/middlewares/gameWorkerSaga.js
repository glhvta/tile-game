import { take, put, call, select, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { TILE_PRESSED } from '../actionTypes';
import { tilesToRememberSelector, levelSelector } from '../selectors';
import { activeTilesAction, nonActiveTilesAction, nextLevel, prevLevel, updateTilesAction, makeActiveOnPress, showlevelChangeModal, hideLevelChangeModal} from '../actions';

export function* showLevelTask(level) {
  yield put(activeTilesAction(level));
  yield call(delay, 2000); //why is waiting one second more???!
  yield put(nonActiveTilesAction());
};

export function* checkTheAnswer() {
  const tilesToRemember = yield select(tilesToRememberSelector);
  let tilePressed = new Set();

  while (tilePressed.size !== tilesToRemember.length) {
    const { index } = yield take(TILE_PRESSED);
    yield put(makeActiveOnPress(index));
    
    if (!tilesToRemember.includes(index)) {
      return false;
    }
    tilePressed.add(index);
  };

  return true;
};

export function* changeLevel(isLevelPassed) {
  if (isLevelPassed) {
    yield put.resolve(nextLevel());
  } else {
    yield put.resolve(prevLevel());
  }

  const level = yield select(levelSelector);
  yield put(updateTilesAction(level));
  yield fork(showlevelChangeNotification);
}

function* showlevelChangeNotification() {
  yield put(showlevelChangeModal());
  yield call(delay, 500);
  yield put(hideLevelChangeModal());
}
