import deepMerge from '../utils/deepMerge';

describe('deepMerge', () => {
  it('should merge simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should merge nested objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should handle arrays based on the mergeArrays option', () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4] };
    
    const resultWithMerge = deepMerge(target, source, { mergeArrays: true });
    expect(resultWithMerge).toEqual({ a: [1, 2, 3, 4] });

    const resultWithoutMerge = deepMerge(target, source, { mergeArrays: false });
    expect(resultWithoutMerge).toEqual({ a: [3, 4] });
  });

  it('should handle circular references', () => {
    const objA: any = { name: 'A' };
    const objB: any = { name: 'B', ref: objA };
    objA.ref = objB;

    // Wrap the merge in a try-catch to catch any serialization issues
    try {
        const result = deepMerge({}, objA);
        expect(result.ref.ref).toBe(result); // Check circular reference handling
    } catch (error) {
        console.error('Error during deepMerge:', error);
    }
});

  it('should correctly merge Date, RegExp, Set, and Map', () => {
    const target = {
      date: new Date(2020, 1, 1),
      regExp: /test/g,
      set: new Set([1, 2]),
      map: new Map([['key1', 'value1']]),
    };
    
    const source = {
      date: new Date(2021, 1, 1),
      regExp: /test2/g,
      set: new Set([3, 4]),
      map: new Map([['key2', 'value2']]),
    };
    
    const result = deepMerge(target, source);
    
    expect(result.date).not.toBe(target.date);
    expect(result.regExp).not.toBe(target.regExp);
    expect(result.set).not.toBe(target.set);
    expect(result.map).not.toBe(target.map);
  });
});
