import { morseCodeDict } from "../dictionaries/morse-key-dict.mjs"
import { englishKeyDict } from "../dictionaries/english-key-dict.mjs"

export const morseCodeToEnglish = (symbol) => {

    let englishValue = ''
    let currentMorseValue = ''

    for (let i = 0; i < symbol.length; i++) {
        // console.log('This is the current input:', symbol[i])
        const morseCodeDictKeys = Object.keys(morseCodeDict)
        if (symbol[i] === ' ') {
            // console.log('The current value is a space and is the last value in this symbol')
            //return currentMorseValue
        } else if (morseCodeDictKeys.includes(symbol[i])) {
            currentMorseValue += symbol[i]
            englishValue = morseCodeDict[currentMorseValue]
            //console.log('This symbol is found in the dict')
            // console.log('This is the current morse value:', currentMorseValue)
            // console.log('This is the current english value:', currentEnglishValue)
            //console.log('This is the current english value returned from the function', englishValue)
            //return currentEnglishValue
        } else {
            englishValue = String.fromCharCode(0xFFFD);
            // console.log('This symbol is not found in the dict')
            //return currentEnglishValue
        }
        // console.log('This is the final morse code value', currentMorseValue)
    }
    console.log('This is the final english value', englishValue)
    return englishValue
}




