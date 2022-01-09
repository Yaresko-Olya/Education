// 4
const cachedFunc = require('./hw8-4');

test('1', () => {
    expect(cachedFunc('foo', 'bar')).toBe('foobar');
});

test('2', () => {
    expect(cachedFunc('foo', 'bar')).toBe('foobar');
});

test('3', () => {
    expect(cachedFunc('foo', 'baz')).toBe('foobaz');
});