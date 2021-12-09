describe('getSumOrProduct', function () {
    describe('НЕ четные значения, операция +', function(){
        it('3 + 3 = 6', function() {
            assert.equal(getSumOrProduct(3, 3), 6);
        });
        it('11 + 20 = 31', function() {
            assert.equal(getSumOrProduct(11, 20), 31);
        });
    });
    describe('Четные значения, операция *', function(){
        it('4 * 4 = 16', function() {
            assert.equal(getSumOrProduct(4, 4), 16);
        });
        it('20 * 21 = 420', function() {
            assert.equal(getSumOrProduct(20, 21), 420);
        });
    });
});


describe('getQuarter', function () {
    
    it('I четверть, если x,y > 0', function() {
        assert.equal(getQuarter(2, 3), 'I');
    });
    it('II четверть, если x < 0, y > 0', function() {
        assert.equal(getQuarter(-1, 5), 'II'); 
    });

    it('III четверть, если x,y < 0', function() {
        assert.equal(getQuarter(-3, -2), 'III');
    });
    it('IV четверть, если x > 0, y < 0', function() {
        assert.equal(getQuarter(5, -2), 'IV');
    });

});


describe('sumPositives', function () {
    
    it('Если a, b, c > 0', function() {
        assert.equal(sumPositives(2, 3, 3), 8);
    });
    it('Если a, b > 0, c < 0', function() {
        assert.equal(sumPositives(1, 5, -2), 6); 
    });

    it('Если a > 0, b, c < 0', function() {
        assert.equal(sumPositives(3, -2, -4), 3);
    });
    it('Если a, b, c < 0', function() {
        assert.equal(sumPositives(-5, -2, -1), 0);
    });
    it('Если a, c < 0, b > 0', function() {
        assert.equal(sumPositives(-5, 2, -1), 2);
    });
    it('Если a, c > 0, b < 0', function() {
        assert.equal(sumPositives(5, -2, 1), 6);
    });
    it('Если a < 0, b, c > 0', function() {
        assert.equal(sumPositives(-3, 2, 4), 6);
    });

});



describe('max', function () {
    
    it('Если a = 2 b = 1 то вернет а', function() {
        assert.equal(max(2, 1), 2);
    });
    it('Если a = 1 b = 2 то вернет b', function() {
        assert.equal(max(1, 2), 2); 
    });

    it('Если a = 2 b = 2 то вернет a', function() {
        assert.equal(max(2, 2), 2);
    });
    

});