import { all, takeLatest, put } from 'redux-saga/effects';
import { GAME_START } from '../actionTypes';
import { activeTilesAction } from '../actions';

export function* watchGameStart() {
  yield takeLatest(GAME_START, makeTilesActive);
  console.log('take start')
}

function* makeTilesActive({payload}) {
  console.log('wil put')
  yield put(activeTilesAction(payload));
  console.log('has put')
}

export default function* rootSaga() {
  yield all([
    watchGameStart()
  ])
}