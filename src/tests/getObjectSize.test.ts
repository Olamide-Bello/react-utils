import getObjectSize from '../utils/getObjectSize';

describe('getObjectSize', () => {
    it('should return the correct size for a simple object', () => {
        const obj = { name: 'Alice', age: 30 };
        expect(getObjectSize(obj)).toBeGreaterThan(0);
    });

    it('should return the correct size for a nested object', () => {
        const obj = { user: { name: 'Alice', details: { age: 30, country: 'Wonderland' } } };
        expect(getObjectSize(obj)).toBeGreaterThan(0);
    });

    it('should return the correct size for an empty object', () => {
        const obj = {};
        expect(getObjectSize(obj)).toBe(2); // "{}" is 2 bytes
    });

    it('should handle circular references', () => {
        const obj: any = { name: 'Alice' };
        obj.self = obj; // Circular reference
        expect(getObjectSize(obj)).toBeGreaterThan(0);
    });

    it('should return the correct size for an array', () => {
        const obj = [1, 2, 3, 4, 5];
        expect(getObjectSize(obj)).toBeGreaterThan(0);
    });

    it('should return the correct size for an empty array', () => {
        const obj: any[] = [];
        expect(getObjectSize(obj)).toBe(2); // "[]" is 2 bytes
    });

    it('should handle complex objects', () => {
        const obj = {
            user: { name: 'Alice', age: 30 },
            hobbies: ['reading', 'gaming'],
            details: { married: false, address: null },
        };
        expect(getObjectSize(obj)).toBeGreaterThan(0);
    });
});
