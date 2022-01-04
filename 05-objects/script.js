// 1
/* Составьте алгоритм, который считает, 
сколько времени вам нужно на приготовление яиц. 
Правила: -Яйца варить 5 минут 
-Вместительность емкости не более 5 яиц одновременно
*/

function getCookingTime (eggsAmount) {
    let result = eggsAmount / 5
    if(eggsAmount % 5 === 0){
        return result * 5
    }else if(eggsAmount % 5 !== 0){
        return Math.ceil(result) * 5
        
    }
}

// const getTime = (eggs) => Math.ceil(eggs / 5) * 5;

// console.log(getCookingTime(14))
// console.log(getTime(14))

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

// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]))
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))

// 3
/* Принимая массив объектов и случайную строку. 
У объектов может быть ключ: «title» с разными значениями. 
Создайте алгоритм, который фильтрует массив, 
заданный как первый параметр, и возвращает массив объектов, 
которые содержат в своих заголовках заданную строку в качестве 
второго параметра (без учета регистра).
*/

function findTitle(array, string) { 
 let arr = array.filter(function(obj){
    if (obj.hasOwnProperty('title')) {
        return obj.title.toLowerCase().includes(string.toLowerCase())
    } else {
        return false;
    }
 })
 return arr
}

let string = 'js'
let array =  [{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'This obj doesn\’t have key title js' }, { title: 'Js - is the best!' }]; 
// console.log(findTitle(array, string))


//4
//Принимая строку, ваша функция должна вернуть обьект,
// в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters(string) {
    let result = {};
    for (let letter of string){
        result[letter] = letter in result? result[letter] + 1 : 1;
    }
    return result
}

// console.log(countCharacters('latter'));

//5
// Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
function getNextPalindrome(number) {
    let result;
    for (let  i = number + 1; i > number; i++) {
        let iStr = i +'';
        let isPalindrome = iStr.length > 1;
        for(let j = 0; j < Math.floor(iStr.length / 2); j++){
            if (iStr[j] !== iStr[iStr.length -j-1]) {
                isPalindrome = false
            }
        }
        if (isPalindrome){
            return i;
        }
    }
}
console.log(getNextPalindrome(7))
console.log(getNextPalindrome(99))
console.log(getNextPalindrome(132))
console.log(getNextPalindrome(202))
console.log(getNextPalindrome(888))
console.log(getNextPalindrome(999))
console.log(getNextPalindrome(102101))
