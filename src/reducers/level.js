import { NEXT_LEVEL, PREVIOUS_LEVEL, SET_FIRST_LEVEL } from '../actionTypes';

const level = (state = 1, action) => {
  switch (action.type) {
    case NEXT_LEVEL: {
      return state + 1;
    }
    case PREVIOUS_LEVEL: {
      const newLevel = state - 1;
      return newLevel >= 1 ? newLevel : 1; 
    }
    case SET_FIRST_LEVEL: {
      return 1;
    }
    default: 
      return state;
  }
}

export default level;