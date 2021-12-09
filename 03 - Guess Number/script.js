let guesses = 5;
let randomNumber = null;
let attempts = 1
let numFrom = 1
let numTo = 100
let isGameRunning = false;

const output = document.querySelector('#output');
const game = document.querySelector('#Game');
const inputNumber = document.querySelector('#number');
const settings = document.querySelector('#Settings');
const settingsButton = document.querySelector('#settingsButton');
const exitButton = document.querySelector('#exitButton');

const settingFrom = document.querySelector('#firstNum');
const settingTo = document.querySelector('#secondNum');
const settingAttm = document.querySelector('#attemptsNum');

const fromValue = document.querySelector('#from');
const toValue = document.querySelector('#to');
const attmValue = document.querySelector('#attempts');

settingsButton.addEventListener('click', function(){
    if (settings.style.display === 'none'){
        settings.style.display = 'block'
    } else {
        settings.style.display = 'none'
    }
});
exitButton.addEventListener('click', function () {
    isGameRunning = false;
    startGame();
});

game.addEventListener('submit', function(event){
    event.preventDefault()
    let numberValue = inputNumber.value
    if (numberValue === '') return;
    numberValue = +numberValue;

    if (randomNumber === null) isGameRunning = true;

    startGame(numberValue);
});

function startGame(numberValue) {
    if (isGameRunning) {
        output.textContent = gameRun(numberValue)
        attempts++
    } else {
        attempts = 1;
        randomNumber = null;
        output.textContent = '';
        inputNumber.value = '';
    }
}

function gameRun(numUser){
    if(attempts === 1){
        randomNumber = generateRandomNumber(numFrom, numTo)
    } else if(attempts === guesses && numUser !== randomNumber){
        isGameRunning = false;
        return '!GAME OVER!'
    }

    if(numUser === randomNumber) {
        isGameRunning = false;
        return `Поздравляю! Ты угадал задуманное число за ${attempts} попыток.`
    } else if(attempts > 1 && numUser > randomNumber){
        return `Слишком большое число, попробуй меньше. У тебя осталось попыток: ${guesses - attempts} .`
    } else if(attempts > 1 && numUser < randomNumber){
        return `Слишком маленькое число, попробуй больше. У тебя осталось попыток: ${guesses - attempts} .`
    }
}

function generateRandomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

settings.addEventListener('submit', function(event){
    event.preventDefault();
    let fromNum = settingFrom.value;
    let toNum = settingTo.value;
    let attNum = settingAttm.value;

    fromNum = fromNum === '' ? numFrom : +fromNum;
    toNum = toNum === '' ? numTo : +toNum;
    attNum = attNum === '' ? guesses : +attNum;

    if (fromNum > 0 && Math.round(fromNum) === fromNum && fromNum <= 200) {
        numFrom = fromNum;
        settingFrom.style.border = '1px solid grey';
    } else {
        settingFrom.style.border = '1px solid red';
    }

    if (toNum > 0 && Math.round(toNum) === toNum && toNum <= 200) {
        numTo = toNum;
        settingTo.style.border = '1px solid grey';
    } else {
        settingTo.style.border = '1px solid red';
    }

    if (Math.round(attNum) === attNum && attNum >= 1 && attNum <= 15) {
        guesses = attNum;
        settingAttm.style.border = '1px solid grey';
    } else {
        settingAttm.style.border = '1px solid red';
    }

    fromValue.textContent = fromNum;
    toValue.textContent = toNum;
    attmValue.textContent = attNum;
});
