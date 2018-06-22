import drop from '../src/drop';

describe('Drop', () => {
  test('drops the first element of the array', () => {
    const arr = [1, 2, 3];
    const expected = [2, 3];
    expect(drop(arr)).toEqual(expected);
  });

  test('drops the first 2 element of the array', () => {
    const arr = [1, 2, 3, 4, 'a'];
    const expected = [3, 4, 'a'];
    expect(drop(arr, 2)).toEqual(expected);
  });

  test('drops no element of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(drop(arr, 0)).toEqual(expected);
  });

  test('returns the empty array if drop elements are more that array elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(drop(arr, 7)).toEqual([]);
  });
});
