import { all } from 'redux-saga/effects';
import { watchGameStart } from './startGameSaga';

export default function* rootSaga() {
  yield all([
    watchGameStart()
  ])
};
