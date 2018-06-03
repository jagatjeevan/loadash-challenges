import concat from '../src/concat';

const arr = [1,2,3];
const expected = [2,3,4];

test('returns the array', () => {
  expect(concat(arr)).toEqual(arr);
});
