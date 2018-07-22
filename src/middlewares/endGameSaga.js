import { takeLatest, put } from 'redux-saga/effects';
import { firstLevelAction } from '../actions';
import { GAME_END } from '../actionTypes';
import { updateTilesAction } from '../actions'

export function* watchGameEnd() {
  yield takeLatest(GAME_END, endGame);
};

function* endGame() {
  yield put(firstLevelAction());
  yield put(updateTilesAction(1));
}
