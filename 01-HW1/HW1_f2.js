//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function numbers() {
  var result = 0;
  var count = 0;
    for (var i = 1; i < 100; i++) 
    {
      if (i % 2 === 0){
      result = result + i
      count = count + 1
      }
    }
    console.log(result, count);
}
// numbers()




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
// console.log(primeNumber(1));


// 3 task

// let input = 15;
// let root = 0;
// let max = input;
// let min = 1;
// let rounding;

// for(let i = 1; i < input; i++) {
//   rounding = ((max + min) / 2) - (((max + min) % 2) / 2);
//     let s = rounding * rounding;
//     if(s == input) {
//         root = rounding;
//     } else if(s > input) {
//         max = rounding;
//     } else if(s < input) {
//         min = rounding;
//     }
// } root = rounding;

// console.log(`Корень ${input} равен:`  + root);





//4.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++){
      result = result * i
  }
  return result;
}

// console.log(factorial(10));




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
  // console.log(sumCount(50));



//6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

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
  // console.log(getMirror(15));