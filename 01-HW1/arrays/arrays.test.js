describe('getMinOfArray', function () {
    
    it('Получить минимальный элемент массива', function() {
        assert.equal(getMinOfArray([4,2,7,4,1]), 1);
    });

});


describe('getMaxOfArray', function () {
    
    it('Получить максимальный элемент массива', function() {
        assert.equal(getMaxOfArray([1,2,3,7,4]), 7);
    });

});



describe('findIndexOfMin', function () {
    
    it('Получить минимальный индекс массива', function() {
        assert.equal(findIndexOfMin([9, 4, -1, -1, 7, 8, 0, 11]), 2);
    });

});


describe('findIndexOfMax', function () {
    
    it('Получить максимальный индекс массива', function() {
        assert.equal(findIndexOfMax([9, 4, -1, -1, 7, 8, 0, 11]), 7);
    });

});


describe('sumArrayByOddIndexes', function () {
    
    it('Получить сумму элементов массива с нечетными индексами', function() {
        assert.equal(sumArrayByOddIndexes([1,2,3,4,5,6]), 12);
    });

});


describe('getReverse', function () {
    
    it('Сделать реверс массива', function() {
        assert.deepEqual(getReverse([1,2,3]), [3,2,1]);
    });

});


describe('countArrayByOdd', function () {
    
    it('Количество нечетных элементов массива', function() {
        assert.equal(countArrayByOdd([1,2,3,4,5,6,7]), 4);
    });

});


describe('changePlace', function () {
    
    it('Поменять местами первую и вторую половину массива', function() {
        assert.deepEqual(changePlace([1,2,3,4]), [3,4,1,2]);
    });

});




describe('bubbleSort', function () {
    
    it('Вывести отсотрированный массив по возрастанию чисел', function() {
        assert.deepEqual(bubbleSort([-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]), 
        [-82, -67, -44, -33, 15,25,  36,  59,  77, 88]);
    });

});



describe('selectionSort', function () {
    
    it('Вывести отсотрированный массив по возрастанию чисел', function() {
        assert.deepEqual(selectionSort([-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]), 
        [-82, -67, -44, -33, 15,25,  36,  59,  77, 88]);
    });

});



describe('quickSort', function () {
    
    it('Вывести отсотрированный массив по возрастанию чисел', function() {
        assert.deepEqual(quickSort([-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]), 
        [-82, -67, -44, -33, 15,25,  36,  59,  77, 88]);
    });

});