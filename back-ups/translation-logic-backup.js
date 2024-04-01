


 // ENGLISH TO MORSE CODE

 // ADD MORSE CODE NUMBERS

const englishInputStr = 'some input text'

const englishInputArr = englishInputStr.toUpperCase().split('')

//console.log(inputArr)

let finalStr = ''

const englishToMorseCode = (char) => {
    //console.log('one search for matching key function call')
    let currentValue = ''

    if (char === ' ') {
        currentValue += '/ '
    }

    const englishKeys = Object.keys(translatorObj)
    
    // replace with find?

    englishKeys.forEach((key) => {
        const value = translatorObj[key]

        if (char === key) {
            //console.log('Found a value', value)
            currentValue += `${value} `
            //console.log(value)
        }
    })
    //console.log('The current value is:', currentValue)
    return currentValue

    // put in logic to handle un-recognized char edge cases
    // put in logic to handle spaces?
}


// const iterateOverInputStr = inputArr.forEach((char) => {
//     console.log(englishToMorseCode(char))
// });

const iterateOverInputStr = englishInputArr.map((char) => englishToMorseCode(char)).join('');

console.log(iterateOverInputStr)


// iterateOverInputStr function (return single char) -> englishToMorseCode function (return corresponding value) 


 // MORSE CODE TO ENGLISH