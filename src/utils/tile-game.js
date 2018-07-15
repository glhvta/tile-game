import { isNumber } from './validation'

export const getTiles = level => {
  throwIfNotANumber(level);
  let a = 3, b = 3;

  for (let i = 1; i < level; i++) {
    i % 2 === 0 ? b++: a++;
  }
  return a * b;
};

export const getTilesBoxWidth = (tileWidth, level) => {
  throwIfNotANumber(tileWidth, level);
  let numberOfTilesInLine = 3;
  
  for (let i = 1; i < level; i++) {
    if (i % 2 === 0) {
      numberOfTilesInLine++;
    } 
  }

  return numberOfTilesInLine * tileWidth;
}

export const createActiveTiles = (tilesNumber, level) => {
  throwIfNotANumber(tilesNumber, level);
  
  const activeTiles = new Set();
  const activeTilesNumber = level + 2;

  while (activeTiles.size !== activeTilesNumber) {
    const activeIndex = Math.floor(Math.random() * tilesNumber);
    activeTiles.add(activeIndex);
  }

  return Array.from(activeTiles);
}



function throwIfNotANumber(...args) {
  if (!isNumber(...args)) {
    throw new Error('Arguments should be numbers');
  }
}
