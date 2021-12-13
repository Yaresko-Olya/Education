function getUnits (str){
    switch (str){
        case 'один':
            return 1;
        case 'два':
            return 2;
        case 'три':
            return 3;
        case 'четыре':
            return 4;
        case 'пять':
            return 5;
        case 'шесть':
            return 6;
        case 'семь':
            return 7;
        case 'восемь':
            return 8;
        case 'девять':
            return 9;
        case 'десять':
            return 10;
        case 'одинадцать':
            return 11;
        case 'двенадцать':
            return 12;
        case 'тринадцать':
            return 13;
        case 'четырнадцать':
            return 14;
        case 'пятнадцать':
            return 15;
        case 'шестнадцать':
            return 16;
        case 'семнадцать':
            return 17;
        case 'восемнадцать':
            return 18;
        case 'девятнадцать':
            return 19;
    }
}
function getTens(str, isFull) {
    switch(str) {
        case 'двадцать':
            return isFull ? 20 : 2;
        case 'тридцать':
            return isFull ? 30 : 3;
        case 'сорок':
            return isFull ? 40 : 4;
        case 'пятьдесят':
            return isFull ? 50 : 5;
        case 'шестьдесят':
            return isFull ? 60 : 6;
        case 'семьдесят':
            return isFull ? 70 : 7;
        case 'восемьдесят':
            return isFull ? 80 : 8;
        case 'девяносто':
            return isFull ? 90 : 9;
    }
}
function getHundreds (str, isFirst, isSecondMore10){
    let result = 0;
    switch(str) {
        case 'сто':
            result = 1;
            break;
        case 'двести':
            result = 2;
            break;
        case 'триста':
            result = 3;
            break;
        case 'четыреста':
            result = 4;
            break;
        case 'пятьсот':
            result = 5;
            break;
        case 'шестьсот':
            result = 6;
            break;
        case 'семьсот':
            result = 7;
            break;
        case 'весемьсот':
            result = 8;
            break;
        case 'девятьсот':
            result = 9;
            break;
    }

    if (isSecondMore10) return result * 10;
    else if (isFirst) return result * 100;

    return result;
}

function commonNum(string){
    const srtArray = string.split(' ');
    let result = '';

    for(let i = srtArray.length - 1; i >= 0; i--) {
        let currentNumStr = srtArray[i];
        const isFirst = i === srtArray.length - 1;

        const units = getUnits(currentNumStr)
        const tens = getTens(currentNumStr, isFirst);
        const hundreds = getHundreds(currentNumStr, isFirst, getUnits(srtArray[i + 1]) < 10);

        result = (units ?? tens ?? hundreds) + result;
    }

    return result;
}

console.log(commonNum('восемь'));
console.log(commonNum('пятнадцать'));
console.log(commonNum('двадцать'));
console.log(commonNum('двадцать пять'));
console.log(commonNum('тридцать четыре'));
console.log(commonNum('сорок семь'));
console.log(commonNum('восемьдесят'));
console.log(commonNum('девяносто девять'));
console.log(commonNum('сто'));
console.log(commonNum('сто двадцать'));
console.log(commonNum('сто двадцать пять'));
console.log(commonNum('четыреста сорок три'));
console.log(commonNum('сто девять'));
console.log(commonNum('сто десять'));
console.log(commonNum('сто двенадцать'));
console.log(commonNum('сто шестьдесят'));
console.log(commonNum('шестьсот шестьдесят шесть'));
console.log(commonNum('девятьсот девяносто девять'));
console.log(commonNum('ноль'));