import clamp from '../utils/clamp';

describe('clamp', () => {
  it('should return the value when it is within the range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  it('should return the min value when the input is less than the min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(0, 1, 10)).toBe(1);
  });

  it('should return the max value when the input is greater than the max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(20, 1, 5)).toBe(5);
  });

  it('should handle edge cases where the value is equal to min or max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('should work with negative numbers', () => {
    expect(clamp(-3, -5, 5)).toBe(-3);
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  it('should handle when min and max are the same', () => {
    expect(clamp(5, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
  });
});