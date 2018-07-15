import { isNumber } from './validation'

const getTiles = level => {
  if (!isNumber(level)) {
    throw new Error('Level should be a number');
  }
  let a = 3, b = 3;

  for (let i = 1; i < level; i++) {
    i % 2 === 0 ? b++: a++;
  }
  return a * b;
};

export default getTiles;
