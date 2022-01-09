// 2
const getNumber = require('./hw5-2');

test('array of odd numbers, even number 4', () => {
    expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
});

test('array of even numbers, odd number 13', () => {
    expect(getNumber([0, 2, 8, -4, 0, -122, 13, 4, 28, 12])).toBe(13);
});

test('array of odd numbers, even number -4', () => {
    expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, -4, 9, 23, -17])).toBe(-4);
});

test('array of even numbers, odd number -13', () => {
    expect(getNumber([0, 2, 8, -4, 0, -122, -13, 4, 28, 12])).toBe(-13);
});

test('array of even numbers, without odd number', () => {
    expect(getNumber([0, 2, 8, -4, 0, -122, -14, 4, 28, 12])).toBe(undefined);
});

test('array of even numbers, with 2 odd number', () => {
    expect(getNumber([0, 2, 8, -4, 0, -122, -13, 11, 4, 28, 12])).toBe(-13);
});