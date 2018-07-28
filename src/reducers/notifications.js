import { SHOW_LEVEL_CHANGE_MODAL, HIDE_LEVEL_CHANGE_MODAL } from '../actionTypes';

const initialState = {
  levelChange: false
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LEVEL_CHANGE_MODAL: {
      return {...state, levelChange: true};
    }
    case HIDE_LEVEL_CHANGE_MODAL: {
      return {...state, levelChange: false}; 
    }
    default: 
      return state;
  }
}

export default notifications;