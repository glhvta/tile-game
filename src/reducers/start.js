import { START_ACTION } from '../actionTypes';

const start = (state = [], action) => {
  switch (action.type) {
    case START_ACTION: {
      return [...state];
    }
    default: 
      return state;
  }
}

export default start;
