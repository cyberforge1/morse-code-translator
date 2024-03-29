
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

leftInput.addEventListener('input', () => {
    const leftInputValue = leftInput.value
    rightInput.setAttribute('readonly', true);
    console.log('This is the left input', leftInputValue)
    if (leftInputValue === '') {
        rightInput.removeAttribute('readonly');
    }
})


rightInput.addEventListener('input', () => {
    const rightInputValue = rightInput.value
    leftInput.setAttribute('readonly', true);
    console.log('This is the right input', rightInputValue)
    if (rightInputValue === '') {
        leftInput.removeAttribute('readonly');
    }
})
