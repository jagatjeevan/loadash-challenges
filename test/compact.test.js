import compact from '../src/compact';

describe('Compact', () => {
  test('removes the falsey value from an array', () => {
    expect(compact([1, '', false, null, 0])).toEqual([1]);
    expect(compact([1, 13, '', false, null, 0])).toEqual([1, 13]);
    expect(compact([1, 13, '', false, null, 0, 24])).toEqual([1, 13, 24]);
  });
});
