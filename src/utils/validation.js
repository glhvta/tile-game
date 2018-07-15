export const isNumber = (...args) => {
  return args.every(n => !isNaN(parseFloat(n)) && isFinite(n));
}
