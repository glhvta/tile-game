import { 
  GAME_START, CREATE_ACTIVE_TILES, REMOVE_ACTIVE_TILES, 
  TILE_PRESSED, NEXT_LEVEL, PREVIOUS_LEVEL, UPDATE_TILES,
  MAKE_TILE_ACTIVE
 } from '../actionTypes';

//todo: make actions creator
export const startGameAction = payload => {
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

export const makeActiveOnPress = index => ({type: MAKE_TILE_ACTIVE, index})

export const nonActiveTilesAction = payload => {
  return {
    type: REMOVE_ACTIVE_TILES,
  }
}

export const nextLevel = () => ({type: NEXT_LEVEL})
export const prevLevel = () => ({type: PREVIOUS_LEVEL})

export const updateTilesAction = level => ({type: UPDATE_TILES, level})
