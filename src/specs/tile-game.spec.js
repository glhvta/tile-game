import { getTiles, getTilesBoxWidth, getActiveTiles } from '../utils/tile-game'

describe('Tiles-Game-Utils', function () {
  describe('#getTiles', function () {

    it('should throw an error if not a number was passed', () => {
      expect(getTiles).toThrow();
    });

    it('should return 9 tiles for the first level', () => {
      expect(getTiles(1)).toEqual(9);
    });

    it('should return 12 for the second level', () => {
      expect(getTiles(2)).toEqual(12);
    });

    it('should return 20 for the 4th level', () => {
      expect(getTiles(4)).toEqual(20);
    });

    it('should return 30 for the 7th level', () => {
      expect(getTiles(7)).toEqual(36);
    });

    it('should return 42 for the 9th level', ()=> {
      expect(getTiles(9)).toEqual(49);
    });

  });

  describe('#getTilesBoxWidth', function () {

    it('should throw an error if not a number was passed', () => {
      expect(getTilesBoxWidth).toThrow();
    });

    it('should return 189px tiles for the first level', () => {
      expect(getTilesBoxWidth(63, 1)).toEqual(189);
    });

    it('should return 252px for the 3 level', () => {
      expect(getTilesBoxWidth(63, 3)).toEqual(252);
    });

    it('should return 315px for the 5 level', () => {
      expect(getTilesBoxWidth(63, 5)).toEqual(315);
    });
  });

  describe('#getActiveTiles', function () {

    it('should return 3 active tiles for the first level', () => {
      expect(getActiveTiles(9, 1)).toHaveLength(3);
    });

    it('should return 5 active tiles for the third level', () => {
      expect(getActiveTiles(25, 3)).toHaveLength(5);
    });

    it('should return array as the result', () => {
      const activeTiles = getActiveTiles(25, 3);
      expect(Array.isArray(activeTiles)).toBeTruthy();
    });

    it('should return indexes with active tiles in proper range', () => {
      const activeTiles = getActiveTiles(25, 3);

      activeTiles.forEach(tile => {
        expect(tile).toBeLessThan(25);
      });
    });

    it('should not contain the same values', () => {
      const activeTiles = getActiveTiles(25, 3);
      const setTiles = new Set(activeTiles);

      expect(activeTiles.length).toEqual(setTiles.size);
    });

  });
});