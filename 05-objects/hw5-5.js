//5
// Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
function getNextPalindrome(number) {
    let result;
    for (let  i = number + 1; i > number; i++) {
        let iStr = i +'';
        let isPalindrome = iStr.length > 1;
        for(let j = 0; j < Math.floor(iStr.length / 2); j++){
            if (iStr[j] !== iStr[iStr.length -j-1]) {
                isPalindrome = false
            }
        }
        if (isPalindrome){
            return i;
        }
    }
}
console.log(getNextPalindrome(7))
console.log(getNextPalindrome(99))
console.log(getNextPalindrome(132))
console.log(getNextPalindrome(202))
console.log(getNextPalindrome(888))
console.log(getNextPalindrome(999))
console.log(getNextPalindrome(102101))

module.exports = getNextPalindrome;