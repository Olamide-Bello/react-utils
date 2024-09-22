import deepFreeze from '../utils/deepFreeze';

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    const frozenObj = deepFreeze(obj);
    
    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(() => { frozenObj.a = 3; }).toThrow(); // Trying to modify should fail
  });

  it('should freeze nested objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj.b)).toBe(true);
    expect(() => { frozenObj.b.c = 3; }).toThrow(); // Trying to modify should fail
  });

  it('should handle arrays', () => {
    const arr = [1, 2, { a: 3 }];
    const frozenArr = deepFreeze(arr);

    expect(Object.isFrozen(frozenArr)).toBe(true);
    expect(Object.isFrozen(frozenArr[2])).toBe(true);
    expect(() => { frozenArr[0] = 4; }).toThrow(); // Trying to modify should fail
  });
});
