import flattenArray from '../utils/flattenArray'; // Adjust the import path as needed

describe('flattenArray', () => {
    it('should flatten a simple nested array', () => {
        const input = [1, [2, 3], 4];
        const expected = [1, 2, 3, 4];
        expect(flattenArray(input)).toEqual(expected);
    });

    it('should handle deeply nested arrays', () => {
        const input = [1, [2, [3, 4]], 5];
        const expected = [1, 2, 3, 4, 5];
        expect(flattenArray(input)).toEqual(expected);
    });

    it('should return an empty array when given an empty array', () => {
        const input: number[] = [];
        const expected: number[] = [];
        expect(flattenArray(input)).toEqual(expected);
    });

    it('should handle arrays with mixed types', () => {
        const input = [1, 'two', [3, [4, 'five']], { six: 6 }];
        const expected = [1, 'two', 3, 4, 'five', { six: 6 }];
        expect(flattenArray(input)).toEqual(expected);
    });

    it('should handle arrays with undefined values', () => {
        const input = [1, [undefined, 2], [3, [4, undefined]]];
        const expected = [1, undefined, 2, 3, 4, undefined];
        expect(flattenArray(input)).toEqual(expected);
    });

    it('should handle arrays containing other arrays', () => {
        const input = [[1, 2], [3, [4, 5]]];
        const expected = [1, 2, 3, 4, 5];
        expect(flattenArray(input)).toEqual(expected);
    });
});
