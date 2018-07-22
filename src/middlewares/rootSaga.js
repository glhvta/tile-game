import { all } from 'redux-saga/effects';
import { watchGameEnd } from './endGameSaga'; 
import { watchGameStart } from './startGameSaga';

export default function* rootSaga() {
  yield all([
    watchGameStart(),
    watchGameEnd()
  ])
};
