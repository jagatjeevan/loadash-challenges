import unique from '../src/unique';

describe('Unique', () => {
    test('returns all the unique elements in the array', () => {
        const arr = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(unique(arr)).toEqual(expected);

        const arr1 = [1, 1, 2, 3];
        const expected1 = [1, 2, 3];
        expect(unique(arr1)).toEqual(expected1);
    });
});