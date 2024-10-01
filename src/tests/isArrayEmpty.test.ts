import isArrayEmpty from '../utils/isArrayEmpty';

describe('isArrayEmpty', () => {
    it('should return true for null', () => {
        expect(isArrayEmpty(null)).toBe(true);
    });

    it('should return true for undefined', () => {
        expect(isArrayEmpty(undefined)).toBe(true);
    });

    it('should return true for an empty array', () => {
        expect(isArrayEmpty([])).toBe(true);
    });

    it('should return false for a non-empty array', () => {
        expect(isArrayEmpty([1, 2, 3])).toBe(false);
        expect(isArrayEmpty(['a', 'b', 'c'])).toBe(false);
        expect(isArrayEmpty([{}, {}])).toBe(false);
    });

    it('should return false for an array with falsy values', () => {
        expect(isArrayEmpty([0])).toBe(false);
        expect(isArrayEmpty([''])).toBe(false);
        expect(isArrayEmpty([false])).toBe(false);
    });
});
