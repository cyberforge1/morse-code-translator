import { searchForMatchingKey } from './translation-logic.js'
import { dictionaryObj } from './dictionary.js'


const translateButton = document.querySelector('#translateButton')

const clearButton = document.querySelector('#clearButton')

translateButton.addEventListener('click', () => {
    toggleDirection()
    console.log('Translate button has been clicked!')
    clearReadOnly()
})



const clearInputs = () => {
    leftInput.value = ''
    rightInput.value = ''
}

const clearReadOnly = () => {
    rightInput.removeAttribute('readonly');
    leftInput.removeAttribute('readonly');
}

const currentDirection = document.querySelector('#currentDirection')

const toggleDirection = () => {
    if (currentDirection.innerText === 'Direction: English to Morse Code') {
        currentDirection.innerText = 'Direction: Morse Code to English'
    } else {
        currentDirection.innerText = 'Direction: English to Morse Code'
    }
}

clearButton.addEventListener('click', () => {
    clearInputs()
    clearReadOnly()
})


const leftInput = document.querySelector('#leftInput')
const rightInput = document.querySelector('#rightInput')

let rightInputInnerText = rightInput.innerText
console.log('Here:', rightInputInnerText)

// ENGLISH TO MORSE CODE
leftInput.addEventListener('input', () => {
    let leftInputValue = leftInput.value
    let currentLeftInputChar = leftInputValue[leftInputValue.length - 1]
    //rightInput.setAttribute('readonly', true);
    // console.log('This is the left input', currentLeftInputChar.toUpperCase())
    // console.log('The translated left input is', searchForMatchingKey(currentLeftInputChar.toUpperCase()))
    let currentMorseChar = searchForMatchingKey(currentLeftInputChar.toUpperCase())
    console.log('This is the current morse code char', currentMorseChar)
    rightInputInnerText += currentMorseChar
    console.log(typeof rightInputInnerText)
    console.log('This is the right input inner text:', rightInputInnerText)
    rightInput.value = rightInputInnerText

    // if (leftInputValue === '') {
    //     rightInput.removeAttribute('readonly');
    // }
})









// MORSE CODE TO ENGLISH

rightInput.addEventListener('input', () => {
    const rightInputValue = rightInput.value
    leftInput.setAttribute('readonly', true);
    console.log('This is the right input', rightInputValue)
    if (rightInputValue === '') {
        leftInput.removeAttribute('readonly');
    }
})
