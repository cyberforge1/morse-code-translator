const wordCounter = (char, currentValue) => {


    console.log('This is the current char:', currentValue)
    console.log('This is the currentWord acc variable:', char)
    if (char === ' ') {
        return
        // console.log('The current character is a space')
        // currentWord = ''
        // console.log('This is the length of currentWord after reset:', currentWord.length)
        // return currentWord
        // return currentLength
    } else if (char !== ' ') {
        currentWord += char
        console.log('The current character is not a space and the length is incremented by:', currentWord.length)
        return currentWord
}
wordCounter(leftInputValue, currentLeftInputChar)
}
