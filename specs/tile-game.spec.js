const expect = require('chai').expect;
const getTiles = require ('../src/utils/getTiles.js')

describe('Tiles-Game', function () {
  describe('#get tiles', function () {

    it('should throw an error if not a number was passed', function () {
      const wrongArgsFunc = getTiles.bind(this, 'string');

      expect(wrongArgsFunc).to.throw(Error);
    });

    it('should return 9 tiles for the first level', function () {
      expect(getTiles(1)).to.equal(9);
    });

    it('should return a proper number of tiles by level', function () {
      expect(getTiles(4)).to.equal(20);
      expect(getTiles(7)).to.equal(30);
      expect(getTiles(9)).to.equal(42);
    });

  });
});
