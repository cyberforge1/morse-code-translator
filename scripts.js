
const translateButton = document.querySelector('#translateButton')

const clearButton = document.querySelector('#clearButton')

translateButton.addEventListener('click', () => {
    console.log('Translate button has been clicked!')
})

clearButton.addEventListener('click', () => {
    console.log('Clear button has been clicked!')
})

const changeTranslationDirection = () => {

}

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
