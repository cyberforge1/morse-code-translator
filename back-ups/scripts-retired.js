import { englishToMorseCode } from './english-to-morse-logic.js'
import { english-key-dict.mjs } from './dictionary.js'


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
    rightInputInnerText = ''
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

// ENGLISH TO MORSE CODE
leftInput.addEventListener('input', () => {




    let leftInputValue = leftInput.value
    let currentLeftInputChar = leftInputValue[leftInputValue.length - 1]
    rightInput.setAttribute('readonly', true);







    // console.log('This is the left input', currentLeftInputChar.toUpperCase())
    // console.log('The translated left input is', englishToMorseCode(currentLeftInputChar.toUpperCase()))

    // let totalLength = 
    // let currentLength = 



    if(currentLeftInputChar) {


        let currentMorseChar = englishToMorseCode(currentLeftInputChar.toUpperCase())
        //console.log('This is the current morse code char', currentMorseChar)



        rightInputInnerText += currentMorseChar
        //console.log('This is the right input inner text:', rightInputInnerText)



        rightInput.value = rightInputInnerText
    }

    if (leftInputValue.length === 0) {
        rightInput.removeAttribute('readonly');
        clearInputs()
    }
})



if (leftInput.value === '') {
    //console.log('clear the right input')
    rightInput.innerText = ''
}







// MORSE CODE TO ENGLISH

rightInput.addEventListener('input', () => {
    const rightInputValue = rightInput.value
    leftInput.setAttribute('readonly', true);
    console.log('This is the right input', rightInputValue)
    if (rightInputValue === '') {
        leftInput.removeAttribute('readonly');
    }
})
