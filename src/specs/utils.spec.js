import { isNumber } from '../utils/validation';

describe('Utils', function () {
  describe('#isNumber', function () {

    it('should return false if boolean value was passed', () => {
      expect(isNumber(true)).toBeFalsy();
    });

    it('should return false if string value was passed', () => {
      expect(isNumber('number')).toBeFalsy();
    });

    it('should return false if object value was passed', () => {
      expect(isNumber({})).toBeFalsy();
    });

    it('should return true if number value was passed', () => {
      expect(isNumber(14)).toBeTruthy();
    });

    it('should return true if a few number values were passed', () => {
      expect(isNumber(14, 11, 6)).toBeTruthy();
    });

  });
});