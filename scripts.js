import { searchForMatchingKey } from './english-to-morse-logic.js'
import { dictionaryObj } from './dictionary.js'


const translateButton = document.querySelector('#translateButton')

const clearButton = document.querySelector('#clearButton')



// const toggleDirection = () => {
//     if (currentDirection.innerText === 'Direction: English to Morse Code') {
//         currentDirection.innerText = 'Direction: Morse Code to English'
//     } else {
//         currentDirection.innerText = 'Direction: English to Morse Code'
//     }
// }





const clearInputs = () => {
    leftInput.value = ''
    rightInput.value = ''
}

const clearReadOnly = () => {
    rightInput.removeAttribute('readonly');
    leftInput.removeAttribute('readonly');
}






const currentDirection = document.querySelector('#currentDirection')










clearButton.addEventListener('click', () => {
    clearInputs()
})




const leftInput = document.querySelector('#leftInput')
const rightInput = document.querySelector('#rightInput')

rightInput.disabled = true
//leftInput.disabled = true

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





let currentWord = ''


if (rightInput.disabled = true) {
    // ENGLISH TO MORSE CODE
leftInput.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        //console.log("Space key pressed");
        currentWord = '';
    } else if (event.key === "Backspace") {

        //console.log("Backspace key pressed");
        currentWord = currentWord.slice(0, -1);
        //let lastChar = currentWord[currentWord.length - 1]
        // let lastMorseChar = searchForMatchingKey(lastChar)
        // console.log('This is the last morse char', lastMorseChar)
        
        // console.log('This is the current word', currentWord);
        // console.log('This is the current word length', currentWord.length);

 
        let currentValue = rightInput.value;


        let currentValueArray = currentValue.split(' ');
        currentValueArray.pop();
        //console.log('This is the current Array with last element removed', currentValueArray)
        

        currentValue = currentValueArray.join(' ');
        

        rightInput.value = currentValue;



        // let rightInputArr = rightInput.value.split(' ')
        // console.log('This is the right input array before pop', rightInputArr)
        // let poppedElement = rightInputArr.pop()
        // console.log('This is the popped Element', poppedElement)
        // console.log('This is the right input array after pop', rightInputArr)

        // }

        // rightInput.value -= currentMorseChar
    } else {
        let leftInput = event.key.toUpperCase();
        //console.log("Key pressed: " + leftInput);
        rightInput.setAttribute('readonly', true);
        currentWord += leftInput;
        //console.log('This is the current word', currentWord);
        //console.log('This is the current word length', currentWord.length);

        let currentMorseChar = searchForMatchingKey(leftInput)
        //console.log('This is the current morse char:', currentMorseChar)

        rightInput.value += currentMorseChar
        //console.log(rightInput.value)


    }
});



}







//     // console.log('This is the left input', currentLeftInputChar.toUpperCase())
//     // console.log('The translated left input is', searchForMatchingKey(currentLeftInputChar.toUpperCase()))

//     // let totalLength = 
//     // let currentLength = 



//     if(currentLeftInputChar) {


//         let currentMorseChar = searchForMatchingKey(currentLeftInputChar.toUpperCase())
//         //console.log('This is the current morse code char', currentMorseChar)



//         rightInputInnerText += currentMorseChar
//         //console.log('This is the right input inner text:', rightInputInnerText)



//         rightInput.value = rightInputInnerText
//     }

//     if (leftInputValue.length === 0) {
//         rightInput.removeAttribute('readonly');
//         clearInputs()
//     }
// })



// if (leftInput.value === '') {
//     //console.log('clear the right input')
//     rightInput.innerText = ''
// }







// MORSE CODE TO ENGLISH

// rightInput.addEventListener('input', () => {
//     const rightInputValue = rightInput.value
//     leftInput.setAttribute('readonly', true);
//     console.log('This is the right input', rightInputValue)
//     if (rightInputValue === '') {
//         leftInput.removeAttribute('readonly');
//     }
// })
