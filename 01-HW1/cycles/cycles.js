//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function numbers(from, to) {
  var result = 0;
  var count = 0;
    for (let i = from; i <= to; i++) 
    {
      if (i % 2 === 0){
      result = result + i
      count = count + 1
      }
    }
    return [result, count]
}





//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function primeNumber(check){
  if (check < 2){
    return false
  }
  for (var j = 2; j < check; j++) {
    if (check % j === 0) return false;
  }
  return true;
}
console.log(primeNumber(1));


// 3 task (бинарный поиск)

let input = 15;

function getRoot(input){
  let root = 0;
  let max = input;
  let min = 1;
  let rounding;
  for(let i = 1; i < input; i++) {
    rounding = ((max + min) / 2) - (((max + min) % 2) / 2);
      let mult = rounding * rounding;
      if(mult == input) {
          root = rounding;
      } else if(mult > input) {
          max = rounding;
      } else if(mult < input) {
          min = rounding;
      }
  } root = rounding;
  return root
}

console.log(getRoot(input));





//4.Вычислить факториал числа n.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++){
      result = result * i
  }
  return result;
}

console.log(factorial(4));




//5.	Посчитать сумму цифр заданного числа

function sumCount(n){
    var nString = n.toString()
    var result = 0;
    for (var i = 0; i < nString.length; i++){
      var number = +nString[i];
      result = number + result;
    }
    return result
}
console.log(sumCount(42));



/*6.	Вывести число, которое является зеркальным отображением 
последовательности цифр заданного числа, например, задано число 123, 
вывести 321.*/

  // function getMirror(n){
  //   var nString = n.toString();
  //   var nArray = nString.split('');
  //   var nReverse = nArray.reverse();
  //   var nBackString = nReverse.join('');
  //   var nNumber = +nBackString;
  //   return nNumber;
  // }
  // console.log(getMirror(123));


  function getMirror(n){
    var nString = n.toString();
    var result = '';
    
    for (var i = nString.length - 1; i >= 0; i--) {
      result = result + nString[i];
    }
    
    var nNumber = +result;
    return nNumber;
  }
  console.log(getMirror(15));