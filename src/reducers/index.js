import { combineReducers } from 'redux';

import tiles from './tiles';
import level from './level';
import timeLine from './timeLine';
import notifications from './notifications';

export default combineReducers({
  level,
  tiles,
  notifications,
  timeLine
});
