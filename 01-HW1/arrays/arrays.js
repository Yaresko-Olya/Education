
//1.	Найти минимальный элемент массива

function getMinOfArray(numArray) {
let result = 0;
for (let i = 0; i < numArray.length; i++){
    let numberI = numArray[i];
    
    for (let j = 0; j < numArray.length; j++){
        let numberJ = numArray[j];

        if (numberI > numberJ){
            result = numberJ
        }
    }

}

return result;
}

console.log(getMinOfArray([4,2,3,7,4,1])); // 1

//2.	Найти максимальный элемент массива

function getMaxOfArray(numArray) {
  let result = 0;
  for (let i = 0; i < numArray.length; i++){
      let number = numArray[i];
      if(number > result){
          result = number
      }
  }

  return result;
}

console.log(getMaxOfArray([1,2,3,7,4,4,0,2])); // 7



// //3.	Найти индекс минимального элемента массива

function findIndexOfMin(arr) {
    let minIndex = 0;
    let min = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    return minIndex
}
  
console.log(findIndexOfMin([9, 4, -1, -1, 7, 8, 0, 11]))

//4.	Найти индекс максимального элемента массива 

function findIndexOfMax(arr) {
  let maxIndex = 1;
  let max = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i;
    }
  }
  return maxIndex
  
}

console.log(findIndexOfMax([9, 4, -1, -1, 7, 8, 0, 11]))


//  5 Посчитать сумму элементов массива с нечетными индексами


function sumArrayByOddIndexes(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++){
      if(i % 2 !== 0){
          result = result + arr[i];
      }
  }
  return result;
}

console.log(sumArrayByOddIndexes([1,2,3,4,5,6])); 

//  6 Сделать реверс массива
// function getReverse(arr){
//   arr.reverse();
//   return arr;
// }
// console.log(getReverse([1,2,3]));


function getReverse(arr){
  const arr3 = [];

  for (let i = arr.length -1; i >= 0; i--){
    arr3[arr3.length] = arr[i];
  }

  return arr3;
}
console.log(getReverse([1,2,3]));



// 7 Посчитать количество нечетных элементов массива

function countArrayByOdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 !== 0){
          result = result + 1;
      }
  }
  return result;
}

console.log(countArrayByOdd([1,2,3,4,5,6,7])); 

// 8.  Поменять местами первую и вторую половину массива 1234 результат 3412


function changePlace(arr){
  const middleIndex = Math.round(arr.length / 2);

  const arr2 = [];

  let index = middleIndex;
  let maxLength = arr.length;

  while (index < maxLength){
    arr2[arr2.length] = arr[index];

    if (index === arr.length -1){
        index = 0;
        maxLength = middleIndex
    } else {
        index++
    }
  }
  return arr2
}

console.log(changePlace([1,2,3,4]));

// 9 task (bubble)

function bubbleSort (array){
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i] > array[i + 1]) {
        const buff = array[i]
        array[i] = array[i + 1]
        array[i + 1] = buff
      }
    }
  }
  return array
}
console.log(bubbleSort([-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]))


//9 task (select)

function selectionSort (array){
  for (let j = 0; j < array.length - 1; j++){
    let max = -Infinity
    let index = null

    for (let i = 0; i < array.length - j; i++){
      if (array[i] > max){
        max = array[i]
        index = i
      }
    }
    let buff = array[array.length - 1 - j]
    array[array.length - 1 - j] = max
    array[index] = buff
  }
  return array
}

console.log(selectionSort([-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]));


// 10 task (Quick)

const array = [-67, 15,  77, -82,  25,  59,  36, -44, -33,  88]

const sorted = quickSort(array)
console.log(sorted)

function quickSort (array){
  if (array.length < 2){
    return array
  }

  const index = Math.floor(Math.random() * array.length)
  const currentItem = array[index]

  const more = []
  const less = []

  for (let i = 0; i < array.length; i++){
    if ( i === index){
      continue
    }
    if (array[i] > currentItem){
      more.push(array[i])
    }
    else{
      less.push(array[i])
    }
  }
  return [
    ...quickSort(less),
    currentItem,
    ...quickSort(more)
  ]
}
