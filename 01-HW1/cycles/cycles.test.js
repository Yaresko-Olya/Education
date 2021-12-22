describe('numbers', function () {
    
    it('Сумма четных чисел от 1 до 99', function() {
        let arr = numbers(1, 99)
        assert.equal(arr[0], 2450);
    });

    it('Количество четных чисел от 1 до 99', function() {
        let arr = numbers(1, 99)
        assert.equal(arr[1], 49);
    });

});



describe('primeNumber', function () {
    
    it('Если число простое', function() {
        assert.equal(primeNumber(5), true);
    });
    it('Если число не простое', function() {
        assert.equal(primeNumber(6), false); 
    });

});




describe('getRoot', function () {
    
    it('Получить корень до целого числа', function() {
        assert.equal(getRoot(15), 3);
    });

});


describe('factorial', function () {
    
    it('Получить факториал числа', function() {
        assert.equal(factorial(4), 24);
    });

});


describe('sumCount', function () {
    
    it('Получить сумму заданных цифр', function() {
        assert.equal(sumCount(50), 5);
    });

});


describe('getMirror', function () {
    
    it('Получить зеркальное отображение цифр', function() {
        assert.equal(getMirror(123), 321);
    });

});