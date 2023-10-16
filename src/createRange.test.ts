import createRange from './createRange';

describe('createRange', () => {
  it('should create an array of numbers within a specified range', () => {
    const min = 1;
    const max = 10;
    const range = createRange(min, max);
    expect(range).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return an empty array if the maximum value is less than the minimum value', () => {
    const min = 10;
    const max = 1;
    const range = createRange(min, max);
    expect(range).toEqual([]);
  });
});
