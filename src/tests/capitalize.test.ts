import capitalizeFirstLetter from '../utils/capitalize';

describe('capitalizeFirstLetter', () => {
  it('capitalizes the first letter of a single word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('returns the same string if it is already capitalized', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
  });

  it('returns an empty string when given an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('capitalizes the first letter of each word when capitalizeWords is true', () => {
    expect(capitalizeFirstLetter('hello world', true)).toBe('Hello World');
  });

  it('handles strings with multiple spaces correctly', () => {
    expect(capitalizeFirstLetter('   hello    world   ', true)).toBe('   Hello    World   ');
  });

  it('returns the same string if capitalizeWords is false', () => {
    expect(capitalizeFirstLetter('hello world', false)).toBe('Hello world');
  });

  it('capitalizes only the first letter of the first word when capitalizeWords is false', () => {
    expect(capitalizeFirstLetter('hello world', false)).toBe('Hello world');
  });

  it('capitalizes first letter of multiple words', () => {
    expect(capitalizeFirstLetter('multiple words test', true)).toBe('Multiple Words Test');
  });
});
