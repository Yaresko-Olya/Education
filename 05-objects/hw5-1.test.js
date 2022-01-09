// 1
const getCookingTime = require('./hw5-1');

test('Cook 14 eggs for 15 minutes', () => {
    expect(getCookingTime(14)).toBe(15);
});

test('Cook 15 eggs for 15 minutes', () => {
    expect(getCookingTime(15)).toBe(15);
});

test('Cook 3 eggs for 5 minutes', () => {
    expect(getCookingTime(3)).toBe(5);
});

test('Cook 23 eggs for 25 minutes', () => {
    expect(getCookingTime(23)).toBe(25);
});

test('Cook 0 eggs for 0 minutes', () => {
    expect(getCookingTime(0)).toBe(0);
});