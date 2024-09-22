/**
 * @jest-environment jsdom
 */
import deepClone from '../utils/deepClone';

describe('deepClone', () => {
    it('should clone a simple object', () => {
        const obj = { a: 1, b: 2 };
        const clonedObj = deepClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it('should clone nested objects', () => {
        const obj = { a: 1, b: { c: 2 } };
        const clonedObj = deepClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj.b).not.toBe(obj.b);
    });

    it('should handle circular references', () => {
        const obj: any = {};
        obj.self = obj;
        const clonedObj = deepClone(obj);
        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it('should throw error for DOM elements', () => {
        const domElement = document.createElement('div');
        expect(() => deepClone(domElement)).toThrow('Cannot clone DOM elements or system objects');
    });
});
