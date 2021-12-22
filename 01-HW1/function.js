// 1 task

function weekDay (numberDay){
    if(numberDay === 1){
        return 'Monday'
    } else if(numberDay === 2){
        return 'Tuesday'
    }else if(numberDay === 3){
        return 'Wednesday'
    }else if(numberDay === 4){
        return 'Thursday'
    }else if(numberDay === 5){
        return 'Friday'
    }else if(numberDay === 6){
        return 'Saturday'
    }else if(numberDay === 7){
        return 'Sunday'
    }
}
// console.log(weekDay(6))

function weekDay2(numberDay) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][numberDay - 1]
}
// console.log(weekDay2(7))

function getDistance(x1, x2) {
  const result = Math.sqrt(Math.pow((x1 - x2)))
  return Math.floor(result)
}
console.log(getDistance(1, 2))
// 2 task

function getDistance(x1, y1, x2, y2) {
  const result = Math.sqrt(Math.pow((x1 - x2)) + Math.pow((y1 - y2)));
  return Math.floor(result)
}
// console.log(getDistance(1, 2, 3, 4))


// 3 задание (0 - 999 прописью)

function getWordNumber(num) {
    if (num === 0) {
      return 'ноль';
    } else if (num < 100) {
      return getHund(num);    
    } else if (num < 1000) {
      return getHundreds(num);
    }
  }
  
  function getHund(num) {
    if (num < 11) {
      return getSingles(num);
    } else {
      return getDoubles(num);  
    }
  }
  
  function getSingles(num) {
    return ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'][num];
  }
  
  function getDoubles(num) {
    let firstWord = getSingles(+(num.toString()[0]));
    let secondWord = getSingles(+(num.toString()[1]));
    if (num < 20) {
      secondWord = secondWord.replace(/е$|ь$/, '').replace(/а$/, 'е');
      return secondWord + 'надцать';
    } else if (num < 40) {
      const second = (num+'').split('')[1];
      return firstWord + 'дцать' + ' ' + ((second !== '0') ? getSingles(second) : '');
    }else if (num < 50) {
      return 'сорок' + ' ' +(secondWord === 'ноль' ? '' : secondWord);
    } else if (num < 90) {
      return firstWord + 'десят' + ' ' + (secondWord === 'ноль' ? '' : secondWord);
    } else if (num < 100) {
      return firstWord.replace(/ть$/, '') + 'носто' + ' ' + (secondWord === 'ноль' ? '' : secondWord);
    }
  }
  
function getHundreds(num) {
  let first = +(num.toString()[0]);
  let firstWord = getSingles(first);
  let numMinusHundred = num - (first * 100);
  if (num < 200) {
    return 'сто' + ' ' + getHund(num - 100);
  } else if (num < 300) {
    firstWord = firstWord.replace(/а$/, 'е');
    return firstWord + 'сти' + ' ' + getHund(numMinusHundred);
  } else if (num < 500) {
    return firstWord + 'ста' + ' ' + getHund(numMinusHundred);
  } else {
    return firstWord + 'сот' + ' ' + getHund(numMinusHundred);
  }
}
  
// console.log(getWordNumber(150))


// 4 задание. Есть число прописью - вывести числом (0-999)

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
console.log(commonNum('восемьдесят'));
console.log(commonNum('девяносто девять'));
console.log(commonNum('сто'));
console.log(commonNum('сто двадцать'));
console.log(commonNum('сто двадцать пять'));
console.log(commonNum('сто десять'));
console.log(commonNum('сто двенадцать'));
console.log(commonNum('сто шестьдесят'));
console.log(commonNum('девятьсот девяносто девять'));
console.log(commonNum('ноль'));