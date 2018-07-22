import { GAME_START, GAME_IN_PROCESS, GAME_END } from '../actionTypes';

const timeLine = (state = GAME_START, action) => {
  switch (action.type) {
    case GAME_START: {
      return GAME_IN_PROCESS;
    }
    case GAME_END: {
      console.log('sfdsfd')
      return GAME_END; 
    }
    default: 
      return state;
  }
}

export default timeLine;