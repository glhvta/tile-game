import { UPDATE_TILES, CREATE_ACTIVE_TILES, REMOVE_ACTIVE_TILES } from '../actionTypes';
import { getTiles, createActiveTiles } from '../utils/tile-game';

const initialState = {
  allTiles: new Array(9).fill('*'),
  activeTiles: [],
  tilesToRemember: []
}

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TILES: {
      const tilesNumber =  getTiles(action.level);
      const allTiles = new Array(tilesNumber).fill('*');

      return {...state, allTiles};
    }
    case CREATE_ACTIVE_TILES: {
      const { tilesNumber, level } = action.payload;
      const activeTiles = createActiveTiles(tilesNumber, level);

      return {...state, activeTiles, tilesToRemember: [...activeTiles]}
    }
    case REMOVE_ACTIVE_TILES: {
      return {...state, activeTiles: []}
    }
    default: 
      return state;
  }
}

export default tiles;
