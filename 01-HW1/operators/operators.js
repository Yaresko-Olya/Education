//1.	Если а – четное посчитать а*б, иначе а+б

function getSumOrProduct(a,b) {
    let result=0;
        if (a % 2 !== 0){
            result=a+b;
        }else{
            result=a*b;
        }
    return result;
}
console.log (getSumOrProduct (4,7))    

//2.	Определить какой четверти принадлежит точка с координатами (х,у)


function getQuarter(x,y) {
  let result = '';
  if (x > 0 && y > 0){
    result = 'I';
  } else if (x < 0 && y > 0) {
    result = 'II';
  } else if (x < 0 && y < 0) {
    result = 'III';
  } else if (x > 0 && y < 0) {
    result = 'IV';
  } 
  return result;
}
console.log(getQuarter(-5,0));


//3.	Найти суммы только положительных из трех чисел

function sumPositives(a, b, c) {
  let result = 0;

  if (a > 0) result = a;

  if (b > 0) result = result + b;

  if (c > 0) result = result + c;

  return result;
}
  console.log(sumPositives(1, 2, 3));



//4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

  function max(a, b) {
    if (a >= b) {
      return a;
    }
    return b;
  }
  let a = 1,
    b = 2,
    c = 3;
  
  console.log(max(a * b * c, a + b + c) + 3);


  //5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

  // (аперанд1 && аперанд2) && аперанд - true|false - возвращает true, если оба аргумента истинны, а иначе – первый false:
// (аперанд1 || аперанд2) || аперанд - true|false - возвращает первый true, или последний false

function getScore(rating) {
    var result = '';
    if (rating >= 0 && rating <= 19){
      result = 'F';
    }
    if (rating >= 20 && rating <= 39){
      result = 'E';
    }
    if (rating >= 40 && rating <= 59){
      result = 'D';
    }
    if (rating >= 60 && rating <= 74){
      result = 'C';
    }
    if (rating >= 75 && rating <= 89){
      result = 'B';
    }
    if (rating >= 90 && rating <= 100){
      result = 'A';
    }
    
    return result;
}
console.log(getScore(10)); // -> F
console.log(getScore(25)); // -> E
console.log(getScore(41)); // -> D
console.log(getScore(73)); // -> C
console.log(getScore(80)); // -> B
console.log(getScore(99)); // -> A

