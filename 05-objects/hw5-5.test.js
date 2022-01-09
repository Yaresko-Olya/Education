// 5
const getNextPalindrome = require('./hw5-5');

test('1', () => {
    expect(getNextPalindrome(7)).toBe(11);
});

test('2', () => {
    expect(getNextPalindrome(99)).toEqual(101);
});

test('3', () => {
    expect(getNextPalindrome(132)).toEqual(141);
});

test('4', () => {
    expect(getNextPalindrome(202)).toEqual(212);
});

test('5', () => {
    expect(getNextPalindrome(888)).toEqual(898);
});

test('6', () => {
    expect(getNextPalindrome(999)).toEqual(1001);
});

test('7', () => {
    expect(getNextPalindrome(102101)).toEqual(102201);
});