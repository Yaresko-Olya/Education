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

console.log(countCharacters('latter'));

module.exports = countCharacters;