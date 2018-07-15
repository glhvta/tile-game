import { GAME_START, CREATE_ACTIVE_TILES, REMOVE_ACTIVE_TILES, TILE_PRESSED, NEXT_LEVEL, PREVIOUS_LEVEL } from '../actionTypes';

//todo: make actions creator
export const startGame = payload => {
  return {
    type: GAME_START,
    payload
  }
};

export const pressTileAction = index => {
  return {
    type: TILE_PRESSED,
    index
  }
};

export const activeTilesAction = payload => {
  return {
    type: CREATE_ACTIVE_TILES,
    payload
  }
}

export const nonActiveTilesAction = payload => {
  return {
    type: REMOVE_ACTIVE_TILES,
  }
}

export const nextLevel = () => ({type: NEXT_LEVEL})
export const prevLevel = () => ({type: PREVIOUS_LEVEL})
