import { UPDATE_TILES, CREATE_ACTIVE_TILES, REMOVE_ACTIVE_TILES, MAKE_TILE_ACTIVE } from '../actionTypes';
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

      return {...state, activeTiles, tilesToRemember: [...activeTiles]};
    }
    case MAKE_TILE_ACTIVE: {
      const activeTiles = [...state.activeTiles, action.index];
      console.log('sjgfsbkhbfygf')
      return {...state, activeTiles};
    }
    case REMOVE_ACTIVE_TILES: {
      return {...state, activeTiles: []};
    }
    default: 
      return state;
  }
}

export default tiles;
