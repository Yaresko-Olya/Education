// 3
const findTitle = require('./hw5-3');

test('enter string js, get an array with two objects', () => {
    expect(findTitle([{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'This obj doesn\'t have key title js' }, { title: 'Js - is the best!' }], 'js')).toEqual([ { title: 'I like JS' }, { title: 'Js - is the best!' } ]);
});

