import isPromise from '../utils/isPromise'; // Adjust path accordingly

describe('isPromise', () => {
  it('should return true for a Promise', () => {
    const promise = new Promise((resolve) => resolve('test'));
    expect(isPromise(promise)).toBe(true);
  });

  it('should return true for an async function result', () => {
    const asyncFunc = async () => 'test';
    expect(isPromise(asyncFunc())).toBe(true);
  });

  it('should return false for non-Promise values', () => {
    expect(isPromise(123)).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise('test')).toBe(false);
    expect(isPromise(() => {})).toBe(false);
  });
});
