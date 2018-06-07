import chunk from '../src/chunk';

describe('Chunk', () => {
  test('returns empty array for any empty array', () => {
    expect(chunk([], 1)).toEqual([]);
  });

  test('returns the whole array if size of chunk is greater than array length', () => {
    expect(chunk([1, 2], 3)).toEqual([1, 2]);
  });

  test('returns 2 chunks of the array of 4 elements', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('returns 2 chunks of uneven elements', () => {
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  });
});
