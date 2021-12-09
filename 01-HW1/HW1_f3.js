
//1.	Найти минимальный элемент массива
//2.	Найти максимальный элемент массива

// function getMaxOfArray(numArray) {
//   let result = 0;
//   for (let i = 0; i < numArray.length; i++){
//       let number = numArray[i];
//       if(number > result){
//           result = number
//       }
//   }

//   return result;
// }

//console.log(getMaxOfArray([1,2,3,7,4,4,0,2])); // 7



// function getMinOfArray(numArray) {
// let result = 0;
// for (let i = 0; i < numArray.length; i++){
//     let numberI = numArray[i];
    
//     for (let j = 0; j < numArray.length; j++){
//         let numberJ = numArray[j];

//         if (numberI > numberJ){
//             result = numberJ
//         }
//     }

// }

// return result;
// }

// // console.log(getMinOfArray([4,2,3,7,4,1,5,2])); // 1


// //3.	Найти индекс минимального элемента массива
// //4.	Найти индекс максимального элемента массива 


// function findIndexOfMinMax(arr) {
//   let minIndex = 0;
//   let maxIndex = 1;
//   let min = arr[0];
//   let max = arr[1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//     if (arr[i] > max) {
//       max = arr[i]
//       maxIndex = i;
//     }
//   }
//   return {
//     minIndex,
//     maxIndex
//   };
// }

//console.log(findIndexOfMinMax([9, 4, -1, -1, 7, 8, 0, 11]))


//не сортированное


// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++){
//       result = result * i
//   }
//   return result;
// }

// console.log(factorial(10));


// var название оператор-присвоения значение

// function getMaxOfArray(numArray) {
//   let result = numArray[0];
//   for (let i = 1; i < numArray.length; i++){
//       let number = numArray[i];
//       if(number < result) {
//           result = number
//       }
//   }

//   return result;
// }

// console.log(getMaxOfArray([8,8,3,7,4,4,6,4,9,10,11,12])); // 7
// console.log(getMaxOfArray([1,20,12,35,5])); // 35



// function getMinOfArray(numArray) {
//   let result = 0;
//   let min = numArray[0];

//   for (let i = 1; i < numArray.length; i++) {
//       if (numArray[i] < min) {
//           result = i;
//           min = numArray[i];
//       }
//   }

//   return result;
// }

// console.log(getMinOfArray([4,5,8,7,1,1,9])); 



// function getMaxOfArray(numArray) {
//     let result = 0;
//     let max = numArray[0];

//     for (let i = 1; i < numArray.length; i++) {
//         if (numArray[i] > max) {
//             result = i;
//             max = numArray[i];
//         }
//     }

//     return result;
// }

// console.log(getMaxOfArray([4,5,8,7,1,1,9])); 

// function sumArrayByOddIndexes(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++){
//       if(i % 2 !== 0){
//           result = result + arr[i];
//       }
//   }
//   return result;
// }

// console.log(sumArrayByOddIndexes([1,2,3,4,5,6])); 


// function getReverse(arr){
//   arr.reverse();
//   return arr;
// }
// console.log(getReverse([1,2,3]));

// let maxIndex = arr.length -1;

// function getReverse(arr){
//   const arr3 = [];

//   for (let i = arr.length -1; i >= 0; i--){
//     arr3[arr3.length] = arr[i];
//   }

//   return arr3;
// }
// console.log(getReverse([1,2,3]));

// 8.  Поменять местами первую и вторую половину массива 1234 результат 3412

// const middleIndex = Math.round(arr.length / 2);

// const arr2 = [];

// let index = middleIndex;
// let maxLength = arr.length;

// while (index < maxLength){
//   arr2[arr2.length] = arr[index];

//   if (index === arr.length -1){
//       index = 0;
//       maxLength = middleIndex
//   } else {
//       index++
//   }
// }
// console.log(arr2);

// 9 task (bubble)

// const array = [-67, 15,  77, -82,  25,  59,  36, -44, -33,  88,
              // 6, 10, -49,  50, -16, -74,  25, -38,  97,  66,
              // 12, 76, -23, -10,  49,  47,  69,  37, -45, -79,
              // 41, 20,  48,  61, -53, -47, -25,  68,  99, -29,
              // 18, 88,  34, -86, -76, -42, -18, -26, -15,  47]

// bubbleSort(array)

// function bubbleSort (array){
//   for (let n = 0; n < array.length; n++) {
//     for (let i = 0; i < array.length - 1 - n; i++) {
//       if (array[i] > array[i + 1]) {
//         const buff = array[i]
//         array[i] = array[i + 1]
//         array[i + 1] = buff
//       }
//     }
//   }
//   console.log(array)
// }

//9 task (select)

// const array = [-67, 15,  77, -82,  25,  59,  36, -44, -33,  88,
//               6, 10, -49,  50, -16, -74,  25, -38,  97,  66,
//             12, 76, -23, -10,  49,  47,  69,  37, -45, -79,
//             41, 20,  48,  61, -53, -47, -25,  68,  99, -29,
//             18, 88,  34, -86, -76, -42, -18, -26, -15,  47]

// selectionSort(array)
// function selectionSort (array){
//   for (let j = 0; j < array.length - 1; j++){
//     let max = -Infinity
//     let index = null

//     for (let i = 0; i < array.length - j; i++){
//       if (array[i] > max){
//         max = array[i]
//         index = i
//       }
//     }
//     let buff = array[array.length - 1 - j]
//     array[array.length - 1 - j] = max
//     array[index] = buff
//   }

//   console.log(array)
// }

// 10 task (Quick)

const array = [-67, 15,  77, -82,  25,  59,  36, -44, -33,  88,
                6, 10, -49,  50, -16, -74,  25, -38,  97,  66]

const sorted = quickSort(array)
console.log(sorted)
console.log(isSorted(sorted))

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

function isSorted (array){
  for (let i = 1; i < array; i ++){
    if (array[i] < array[i - 1]){
      return false
    }
  }
  return true
}