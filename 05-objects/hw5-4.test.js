// 4
const countCharacters = require('./hw5-4');

test('1', () => {
    expect(countCharacters('latter')).toEqual({ l: 1, a: 1, t: 2, e: 1, r: 1 });
});

test('2', () => {
    expect(countCharacters('later')).toEqual({ l: 1, a: 1, t: 1, e: 1, r: 1 });
});

test('3', () => {
    expect(countCharacters('ooo')).toEqual({ o: 3});
});
