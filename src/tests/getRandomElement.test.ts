import getRandomElement from '../utils/getRandomElement';

describe('getRandomElement', () => {
    it('should return an element from the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const randomElement = getRandomElement(arr);
        expect(arr).toContain(randomElement);
    });

    it('should return undefined when the array is empty', () => {
        const emptyArray: number[] = [];
        const randomElement = getRandomElement(emptyArray);
        expect(randomElement).toBeUndefined();
    });

    it('should return the only element when the array has one element', () => {
        const arr = ['single'];
        const randomElement = getRandomElement(arr);
        expect(randomElement).toBe('single');
    });

    it('should handle arrays with mixed types', () => {
        const arr = [1, 'two', { key: 'value' }, true, null];
        const randomElement = getRandomElement(arr);
        expect(arr).toContain(randomElement);
    });

    it('should return undefined if called with an empty array multiple times', () => {
        const emptyArray: any[] = [];
        for (let i = 0; i < 5; i++) {
            const randomElement = getRandomElement(emptyArray);
            expect(randomElement).toBeUndefined();
        }
    });
});
