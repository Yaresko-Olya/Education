const { assert, expect } = require('chai');
const jsdom = require('mocha-jsdom');
const fs = require('fs');

const jsFile = fs.readFileSync(__dirname + '/script.js', 'utf-8')

describe('randomNum', function(){
    jsdom({
        src: jsFile,
        url: 'http://localhost'
    });

    it('Returned number is integer', () => {
        const randInt = generateRandomNumber(1, 2);
        expect(randInt).to.be.a('number');
        assert.strictEqual(randInt, Math.round(randInt));
    });

    it('Return number that below 2 and grater than 0', () => {
        const randInt = generateRandomNumber(1, 2);
        expect(randInt).to.be.gt(0);
        expect(randInt).to.be.lt(3);
    });
})

describe('variables value', function(){
    jsdom({
        src: jsFile,
        url: 'http://localhost'
    });

    it('Values before game start', () => {
        expect(guesses).to.equal(5)
        expect(randomNumber).to.be.null
        expect(attempts).to.equal(1)
        expect(numFrom).to.equal(1)
        expect(numTo).to.equal(100)
        expect(isGameRunning).be.false
    })
})