
import camelToSnake from '../utils/camelToSnake';

describe('camelToSnake', () => {
  it('should convert camelCase to snake_case', () => {
    expect(camelToSnake('camelCase')).toBe('camel_case');
  });

  it('should convert PascalCase to snake_case', () => {
    expect(camelToSnake('PascalCase')).toBe('pascal_case');
  });

  it('should handle mixed cases', () => {
    expect(camelToSnake('thisIsAReallyLongVariableName')).toBe('this_is_a_really_long_variable_name');
    expect(camelToSnake('ThisIsAnotherExample')).toBe('this_is_another_example');
  });

  it('should return the same string if already in snake_case', () => {
    expect(camelToSnake('already_snake_case')).toBe('already_snake_case');
  });

  it('should handle empty strings', () => {
    expect(camelToSnake('')).toBe('');
  });

  it('should handle single letters', () => {
    expect(camelToSnake('A')).toBe('a');
    expect(camelToSnake('a')).toBe('a');
  });

  it('should handle numbers in camelCase', () => {
    expect(camelToSnake('camelCase123')).toBe('camel_case123');
    expect(camelToSnake('variable123Name')).toBe('variable123_name');
  });
});
