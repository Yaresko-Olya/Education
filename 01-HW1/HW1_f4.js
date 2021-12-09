// 1 task

// function weekDay (numberDay){
//     if(numberDay === 1){
//         return 'Monday'
//     } else if(numberDay === 2){
//         return 'Tuesday'
//     }else if(numberDay === 3){
//         return 'Wednesday'
//     }else if(numberDay === 4){
//         return 'Thursday'
//     }else if(numberDay === 5){
//         return 'Friday'
//     }else if(numberDay === 6){
//         return 'Saturday'
//     }else if(numberDay === 7){
//         return 'Sunday'
//     }
// }
// console.log(weekDay(15))

// function weekDay2(numberDay) {
//     return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][numberDay - 1]
// }
// console.log(weekDay2(70))

// 2 задание (0 - 999 прописью)

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
  
  console.log(getWordNumber(150))