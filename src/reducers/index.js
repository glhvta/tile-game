import { combineReducers } from 'redux';

import tiles from './tiles';
import level from './level';
import timeLine from './timeLine';

export default combineReducers({
  level,
  tiles,
  timeLine
});
