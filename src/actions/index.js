import { GAME_START, CREATE_ACTIVE_TILES } from '../actionTypes';

export const startGame = payload => {
  return {
    type: GAME_START,
    payload
  }
};

export const activeTilesAction = payload => {
  return {
    type: CREATE_ACTIVE_TILES,
    payload
  }
}
 
