
// MORSE CODE TO ENGLISH



const dictionaryObj = 
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


const morseCodeDict = {}

// Create a new object from the original dictionary with keys and values exchanged

Object.entries(dictionaryObj).forEach(([key, val]) => {
    return morseCodeDict[val] = key
})

//console.log(morseCodeDict)

const morseCodeDictKeys = Object.keys(morseCodeDict)
const morseCodeDictValues = Object.values(morseCodeDict)

// console.log('These are the morse code dict keys as morse chars', morseCodeDictKeys)
// console.log('These are the morse code dict values as english chars', morseCodeDictValues)


// Create a new function that takes a string as input

const morseCodeInputStr = '©.-'


const morseCodeToEnglish = (symbol) => {

    let currentEnglishValue = ''
    let currentMorseValue = ''

    // iterate over the symbol
    // check if the first char (symbol as a key) is in the new dict
    // if so set the current value to that value (English value in dict)

    for (let i = 0; i < symbol.length; i++) {
        console.log(symbol[i])

        if (symbol[i] === ' ') {
            console.log('This is the current value:')
            return currentMorseValue
        } else if (morseCodeDictKeys.includes(symbol[i])) {
            currentMorseValue += symbol[i]
            currentEnglishValue = morseCodeDict[currentMorseValue]
            console.log('This is the current morse value:', currentMorseValue)
            console.log('This is the current english value:', currentEnglishValue)
        } else {
            currentEnglishValue = String.fromCharCode(0xFFFD);
            console.log(currentEnglishValue)
        }
        console.log('This is the final morse code value', currentMorseValue)
        console.log('This is the final english value', currentEnglishValue)
    }


    // check the next char in the symbol 

    // if the next char is equal to space
    // return the currentValue


    // else concatenate the next char to the accValue & check for a key match for this new value in the dict
    // if a match for the accumulated value set the current value to that value

}



morseCodeToEnglish(morseCodeInputStr)


