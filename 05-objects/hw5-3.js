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
let array =  [{ title: 'Some title1' }, { title: 'I like JS' }, { user: 'This obj doesn\'t have key title js' }, { title: 'Js - is the best!' }];
console.log(findTitle(array, string));

module.exports = findTitle;