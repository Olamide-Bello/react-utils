import getRandomNumber from '../utils/getRandomNumber';

describe('getRandomNumber', () => {
    it('should generate a number between the given min and max (inclusive)', () => {
        const min = 5;
        const max = 10;
        const randomNumber = getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('should return a number equal to the min and max if they are the same', () => {
        const min = 7;
        const max = 7;
        const randomNumber = getRandomNumber(min, max);
        expect(randomNumber).toBe(7);
    });

    it('should handle the case where min is greater than max by swapping them', () => {
        const min = 10;
        const max = 5;
        const randomNumber = getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(5);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });

    it('should throw an error if min or max is not a finite number', () => {
        expect(() => getRandomNumber(NaN, 10)).toThrow('min and max must be valid finite numbers');
        expect(() => getRandomNumber(5, Infinity)).toThrow('min and max must be valid finite numbers');
        expect(() => getRandomNumber(Infinity, NaN)).toThrow('min and max must be valid finite numbers');
    });

    it('should generate different numbers across multiple calls within the range', () => {
        const min = 1;
        const max = 100;
        const results = new Set<number>();
        
        // Run the function multiple times to gather a variety of random numbers
        for (let i = 0; i < 1000; i++) {
            const randomNumber = getRandomNumber(min, max);
            expect(randomNumber).toBeGreaterThanOrEqual(min);
            expect(randomNumber).toBeLessThanOrEqual(max);
            results.add(randomNumber);
        }
        
        // Ensure we have more than one unique value in the result set
        expect(results.size).toBeGreaterThan(1);
    });
});
