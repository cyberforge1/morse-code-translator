

const translatorObj = 
{
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

 // ADD MORSE CODE NUMBERS


const inputStr = 'some input text'

const inputArr = inputStr.toUpperCase().split('')

//console.log(inputArr)

let finalStr = ''

const searchForMatchingKey = (char) => {
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
//     console.log(searchForMatchingKey(char))
// });

const iterateOverInputStr = inputArr.map((char) => searchForMatchingKey(char)).join('');

console.log(iterateOverInputStr)


// iterateOverInputStr function (return single char) -> searchForMatchingKey function (return corresponding value) 


