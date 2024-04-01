import { englishToMorseCode } from './logic/english-to-morse-logic.mjs'
import { morseCodeToEnglish } from './logic/morse-to-english-logic.mjs'

import { englishKeyDict } from './dictionaries/english-key-dict.mjs'
import { morseCodeDict } from './dictionaries/morse-key-dict.mjs'


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
        console.log('The right input is disabled');
        rightInput.disabled = false;
        leftInput.disabled = true;
        currentDirection.innerText = 'Direction: Morse Code to English'
    } else if (leftInput.disabled === true) {
        console.log('The left input is disabled');
        leftInput.disabled = false;
        rightInput.disabled = true;
        currentDirection.innerText = 'Direction: English to Morse Code'
    }
}

translateButton.addEventListener('click', () => {
    toggleDirection()
    console.log('Translate button has been clicked!')
})



rightInput.disabled = true
//leftInput.disabled = true


let currentEnglishWord = ''


// ENGLISH TO MORSE FUNCTION

//////////////////////////////////////////////

if (rightInput.disabled === true) {}
leftInput.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        //console.log("Space key pressed");
        currentEnglishWord = '';
    } else if (event.key === "Backspace") {

        //console.log("Backspace key pressed");
        currentEnglishWord = currentEnglishWord.slice(0, -1);
        
        //console.log('This is the current word', currentWord);
        let currentWordArr = currentEnglishWord.split('')

        let currentWordStr = ''

        currentWordArr.forEach((letter) => {
            currentWordStr += englishToMorseCode(letter)
        })

        rightInput.value = currentWordStr

    } else {
        let leftInput = event.key.toUpperCase();
        //console.log("Key pressed: " + leftInput);
        rightInput.setAttribute('readonly', true);
        currentEnglishWord += leftInput;
        //console.log('This is the current word', currentWord);

        let currentMorseChar = englishToMorseCode(leftInput)

        rightInput.value += currentMorseChar
    }
});



////////////////////////////////////////



let currentMorseLetter = ''
let changedMorseLetter = ''

// MORSE TO ENGLISH FUNCTION

if (leftInput.disabled === true) {}
rightInput.addEventListener('keydown', (event) => {


    if (event.key === " ") {
        //console.log("Space key pressed");
        //console.log('The morse code letter has finished')

        leftInput.value += `${changedMorseLetter} `
        //console.log(leftInput.value)

        currentMorseLetter = ''
        //console.log('This is the current morse code letter after it is cleared:', currentMorseLetter)



    } else if (event.key === "Backspace") {
        console.log("Backspace key pressed");
        console.log(morseCodeToEnglish(event.key))

        leftInput.value = leftInput.value.slice(0, -1);

        // //console.log("Backspace key pressed");
        // currentEnglishWord = currentEnglishWord.slice(0, -1);
        
        // //console.log('This is the current word', currentWord);
        // let currentWordArr = currentEnglishWord.split('')

        // let currentWordStr = ''

        // currentWordArr.forEach((letter) => {
        //     currentWordStr += englishToMorseCode(letter)
        // })

        // rightInput.value = currentWordStr





    } else if (event.key === "/") {
        console.log('Slash key pressed')
        //console.log('The morse code word has finished')
        // morseCodeLetter += '/'
        // console.log('This is the current morse code letter after a / addition', morseCodeLetter)
        //console.log(morseCodeToEnglish(event.key))
        currentMorseLetter = ''
        leftInput.value += ' '



    } else if (event.key === "." || event.key === "-") {
        console.log('A dot or a hyphen char pressed')
        //console.log('This is the current morse char', event.key)

        // console.log('This is the current English char', morseCodeToEnglish(event.key))

        currentMorseLetter += event.key
        //console.log('This is the current morse letter', currentMorseLetter)

        changedMorseLetter = morseCodeToEnglish(currentMorseLetter)

        //console.log('This is the changed morse letter:', changedMorseLetter)


        // leftInput.value += `${translatedChar} `
        // console.log(leftInput.value)



    } else {
        //console.log('Any other char was pressed')
        //console.log(morseCodeToEnglish(event.key))
        currentMorseLetter = ''
        leftInput.value += `${morseCodeToEnglish(event.key)}`
    }
    // console.log('This is the current morse letter being passed to the function', currentMorseLetter)
    // console.log('This is the current english letter returned by the function', morseCodeToEnglish(currentMorseLetter))
    // let currentEnglishLetter = morseCodeToEnglish(currentMorseLetter)
    // console.log('This is the current English letter', currentEnglishLetter)

});


//console.log(morseCodeToEnglish('.-'))
