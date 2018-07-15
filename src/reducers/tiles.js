import { UPDATE_TILES } from '../actionTypes';
import { getTiles } from '../utils/tile-game';

const initialState = new Array(9).fill('*');

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TILES: {
      const tilesNumber =  getTiles(action.payload);
      return new Array(tilesNumber).fill('*');
    }
    default: 
      return state;
  }
}

export default tiles;
