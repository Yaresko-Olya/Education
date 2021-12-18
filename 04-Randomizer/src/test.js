const { assert, expect } = require('chai');
const jsdom = require('mocha-jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

describe('Random number generator', () => {

    jsdom({
        src: fs.readFileSync(__dirname + '/script.js', 'utf-8'),
        url: 'http://localhost'
    });


    it('Returned number is integer', () => {
        const randInt = randomInteger(1, 2);
        expect(randInt).to.be.a('number');
        assert.strictEqual(randInt, Math.round(randInt));
    });

    it('Return number that below 2 and grater than 0', () => {
        const randInt = randomInteger(1, 2);
        expect(randInt).to.be.gt(0);
        expect(randInt).to.be.lt(3);
    });
});
