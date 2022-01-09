// 1
/* Составьте алгоритм, который считает,
сколько времени вам нужно на приготовление яиц.
Правила: -Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно
*/

function getCookingTime (eggsAmount) {
    let result = eggsAmount / 5
    if(eggsAmount % 5 === 0){
        return result * 5
    }else if(eggsAmount % 5 !== 0){
        return Math.ceil(result) * 5

    }
}

// const getTime = (eggs) => Math.ceil(eggs / 5) * 5;

console.log(getCookingTime(14))
// console.log(getTime(14))

module.exports = getCookingTime;