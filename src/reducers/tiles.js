import { UPDATE_TILES, CREATE_ACTIVE_TILES } from '../actionTypes';
import { getTiles, createActiveTiles } from '../utils/tile-game';

const initialState = {
  allTiles: new Array(9).fill('*'),
  activeTiles: []
}

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TILES: {
      const tilesNumber =  getTiles(action.payload);
      const allTiles = new Array(tilesNumber).fill('*');

      return {...state, allTiles};
    }
    case CREATE_ACTIVE_TILES: {
      console.log('create active tiles')
      const { length, level } = action.payload;
      console.log( action.payload)
      const activeTiles = createActiveTiles(length, level);
      console.log(activeTiles)
      return {...state, activeTiles}
    }
    default: 
      return state;
  }
}

export default tiles;
