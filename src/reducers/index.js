import { combineReducers } from 'redux';

import tiles from './tiles';
import level from './level';

export default combineReducers({
  level,
  tiles
});
