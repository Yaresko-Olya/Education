// 1
const ticket = require('./hw8-1');

test('arr [25, 25, 50] => Yes', () => {
    expect(ticket([25, 25, 50])).toBe('Yes');
});

test('arr [25, 100] => No', () => {
    expect(ticket([25, 100])).toBe('No');
});

test('arr [25, 25, 50, 100] => No', () => {
    expect(ticket([25, 25, 50, 100])).toBe('Yes');
});

test('arr [25, 50, 100] => No', () => {
    expect(ticket([25, 50, 100])).toBe('No');
});

test('arr [\'25\', \'25\', \'50\', \'100\'] => No', () => {
    expect(ticket(['25', '25', '50', '100'])).toBe('Yes');
});

test('arr [\'25\', \'50\', \'100\'] => No', () => {
    expect(ticket(['25', '50', '100'])).toBe('No');
});