import { 
  GAME_START, GAME_END, CREATE_ACTIVE_TILES, REMOVE_ACTIVE_TILES, 
  TILE_PRESSED, NEXT_LEVEL, PREVIOUS_LEVEL, UPDATE_TILES,
  MAKE_TILE_ACTIVE,
  SET_FIRST_LEVEL
 } from '../actionTypes';

//todo: make actions creator
export const startGameAction = payload => {
  return {
    type: GAME_START,
    payload
  }
};

export const endGameAction = () => ({type: GAME_END}) 

export const pressTileAction = index => {
  return {
    type: TILE_PRESSED,
    index
  }
};

export const activeTilesAction = level => {
  return {
    type: CREATE_ACTIVE_TILES,
    level
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
export const firstLevelAction = () => ({type: SET_FIRST_LEVEL})

export const updateTilesAction = level => ({type: UPDATE_TILES, level})
