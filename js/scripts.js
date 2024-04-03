import { englishToMorseCode, morseCodeToEnglish } from './translation.js';

import { englishKeyDict, morseCodeDict } from './dictionaries.js'


const translateButton = document.querySelector('#translateButton')

const clearButton = document.querySelector('#clearButton')


const clearInputs = () => {
    leftInput.value = ''
    rightInput.value = ''
    currentEnglishWord = ''
    currentMorseLetter = ''
}

const currentDirection = document.querySelector('#currentDirection')

clearButton.addEventListener('click', () => {
    clearInputs()
})




const leftInput = document.querySelector('#leftInput')
const rightInput = document.querySelector('#rightInput')


const toggleDirection = () => {
    if (rightInput.disabled === true) {
        rightInput.disabled = false;
        leftInput.disabled = true;
        currentDirection.innerText = 'Direction: Morse Code to English'
    } else if (leftInput.disabled === true) {
        leftInput.disabled = false;
        rightInput.disabled = true;
        currentDirection.innerText = 'Direction: English to Morse Code'
    }
}

translateButton.addEventListener('click', () => {
    toggleDirection()
})



rightInput.disabled = true
//leftInput.disabled = true


let currentEnglishWord = ''


// ENGLISH TO MORSE FUNCTION


if (rightInput.disabled === true) {}
leftInput.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        currentEnglishWord = '';
    } else if (event.key === "Backspace") {

        currentEnglishWord = currentEnglishWord.slice(0, -1);
        
        let currentWordArr = currentEnglishWord.split('')

        let currentWordStr = ''

        currentWordArr.forEach((letter) => {
            currentWordStr += englishToMorseCode(letter)
        })

        rightInput.value = currentWordStr

    } else {
        let leftInput = event.key.toUpperCase();
        currentEnglishWord += leftInput;

        let currentMorseChar = englishToMorseCode(leftInput)

        rightInput.value += `${currentMorseChar} `
    }
});




let currentMorseLetter = ''
let changedMorseLetter = ''

// MORSE TO ENGLISH FUNCTION

if (leftInput.disabled === true) {}
rightInput.addEventListener('keydown', (event) => {


    if (event.key === " ") {

        leftInput.value += `${changedMorseLetter} `

        currentMorseLetter = ''



    } else if (event.key === "Backspace") {

        leftInput.value = leftInput.value.slice(0, -1);


    } else if (event.key === "/") {

        currentMorseLetter = ''
        leftInput.value += '/'



    } else if (event.key === "." || event.key === "-") {

        currentMorseLetter += event.key

        changedMorseLetter = morseCodeToEnglish(currentMorseLetter)


    } else {
        currentMorseLetter = ''
        leftInput.value += `${morseCodeToEnglish(event.key)}`
    }

});

