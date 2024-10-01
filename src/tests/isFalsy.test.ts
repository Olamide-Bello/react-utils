import isFalsy from '../utils/isFalsy';

describe('isFalsy', () => {
  it('should return true for falsy values', () => {
    const falsyValues = [false, 0, '', null, undefined, NaN];

    falsyValues.forEach(value => {
      expect(isFalsy(value)).toBe(true);
    });
  });

  it('should return false for truthy values', () => {
    const truthyValues = [true, 1, 'hello', {}, [], Infinity, -Infinity];

    truthyValues.forEach(value => {
      expect(isFalsy(value)).toBe(false);
    });
  });
});
