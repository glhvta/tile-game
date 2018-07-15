import { isNumber } from './validation'

export const getTiles = level => {
  if (!isNumber(level)) {
    throw new Error('Level should be a number');
  }
  let a = 3, b = 3;

  for (let i = 1; i < level; i++) {
    i % 2 === 0 ? b++: a++;
  }
  return a * b;
};

export const getTilesBoxWidth = (tileWidth, level) => {
  if (!isNumber(tileWidth, level)) {
    throw new Error('Arguments should be numbers');
  }
  let numberOfTilesInLine = 3;

  for (let i = 1; i < level; i++) {
    if (i % 2 === 0) {
      numberOfTilesInLine++;
    } 
  }

  return numberOfTilesInLine * tileWidth;
}
