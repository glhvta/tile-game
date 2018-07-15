import { NEXT_LEVEL, PREVIOUS_LEVEL } from '../actionTypes';

const start = (state = 1, action) => {
  switch (action.type) {
    case NEXT_LEVEL: {
      return state + 1;
    }
    case PREVIOUS_LEVEL: {
      return state - 1;
    }
    default: 
      return state;
  }
}

export default start;