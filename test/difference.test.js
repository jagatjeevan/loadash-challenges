import difference from '../src/difference';

describe('Difference', () => {
  test('returns the values not present in first array', () => {
    const arr1 = [1, 2, 5];
    const arr2 = [1, 2, 6];
    expect(difference(arr1, arr2)).toEqual([5]);
    expect(difference(arr2, arr1)).toEqual([6]);
  });
});
