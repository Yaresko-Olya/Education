// 2
/* Получая массив чисел. Все они либо нечетные,
либо четные, кроме одного. Тебе нужно его найти.
*/
function getNumber (array) {
    let aarEven = array.filter(function(isEven) {
        return isEven % 2 === 0
    })

    let aarOdd = array.filter(function(isOdd) {
        return isOdd % 2 !== 0
    })

    if (aarEven.length < aarOdd.length) {
        let arrayEven = array.find(function(currentEl) {
            return currentEl % 2 === 0
        })

        return arrayEven

    } else {
        let arrayOdd = array.find(function(currentEl) {
            return currentEl % 2 !== 0
        })
        return arrayOdd
    }
}

// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));
console.log(getNumber([0, 2, 8, -4, 0, -122, -13, 11, 4, 28, 12]));
module.exports = getNumber;