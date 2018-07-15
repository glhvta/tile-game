import { UPDATE_TILES } from '../actionTypes';

import getTiles from '../utils/getTiles';

const tiles = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TILES: {
      return getTiles(action.payload);
    }
    default: 
      return state;
  }
}

export default tiles;
