/**
 * The function creates an array of numbers within a specified range.
 * @param {number} [min=1] - The `min` parameter is the minimum value of the range. It is optional and
 * has a default value of 1 if not provided.
 * @param {number} max - The `max` parameter is the maximum value of the range that you want to create.
 * @returns The function `createRange` returns an array of numbers.
 */

const createRange = (min: number, max: number): number[] => {
  return Array.from({ length: max + 1 - min }, (_, index) => min + index);
};

export default createRange;
