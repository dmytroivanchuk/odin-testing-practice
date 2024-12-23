import analyzeArray from '../analyzeArray';

describe('analyzeArray', () => {
  test('should return correct analysis for a valid array', () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test('should throw an error for an empty array', () => {
    expect(() => analyzeArray([])).toThrow('Input must be a non-empty array');
  });

  test('should throw an error for a non-array input', () => {
    expect(() => analyzeArray('not an array')).toThrow('Input must be a non-empty array');
  });

  test('should handle an array with one element', () => {
    const result = analyzeArray([10]);
    expect(result).toEqual({
      average: 10,
      min: 10,
      max: 10,
      length: 1,
    });
  });

  test('should handle an array with negative numbers', () => {
    const result = analyzeArray([-1, -2, -3, -4, -5]);
    expect(result).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });
});
