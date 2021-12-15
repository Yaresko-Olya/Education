
const min = document.getElementById('minNum');
const max = document.getElementById('maxNum');
const generate = document.getElementById('generate');
const generatedNumber = document.getElementById('generNum')
const reset = document.getElementById('resetButton');
let previousValue = [];



function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

generate.addEventListener('click', function () {
    const valueMin = +min.value
    const valueMax = +max.value
    if(previousValue.length === (valueMax - valueMin) + 1){
        generatedNumber.textContent = 'Elements are over'
        generate.setAttribute('disabled', true);
        return
    }
    let randomNum = randomInteger(valueMin, valueMax)
    let hasDuplecate = previousValue.includes(randomNum)
    while(hasDuplecate){
        randomNum = randomInteger(valueMin, valueMax)
        hasDuplecate = previousValue.includes(randomNum)
    }
    previousValue.push(randomNum)
    generatedNumber.textContent = randomNum
});

reset.addEventListener('click', function (){
    min.value = ''
    max.value = ''
    previousValue = []
    generatedNumber.textContent = ''
    generate.removeAttribute('disabled');
})
