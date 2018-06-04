import concat from '../src/concat';

test('concats element to an empty array', () => {
  const emptyArr = [];
  expect(emptyArr.concat(4)).toEqual([4]);
  expect(emptyArr.concat('a')).toEqual(['a']);
  expect(emptyArr.concat('a', 'b', 5)).toEqual(['a', 'b', 5]);
});

test('concats element to a non-empty array', () => {
  const arr = [1, 2];
  expect(arr.concat(4)).toEqual([1, 2, 4]);
  expect(arr.concat('a')).toEqual([1, 2, 'a']);
  expect(arr.concat('a', 'b', 5)).toEqual([1, 2, 'a', 'b', 5]);
});
