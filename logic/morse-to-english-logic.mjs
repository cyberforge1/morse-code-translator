import { morseCodeDict } from "../dictionaries/morse-key-dict.mjs"

// MORSE CODE TO ENGLISH

export const morseCodeToEnglish = (symbol) => {

    let englishValue = ''
    let currentMorseValue = ''

    for (let i = 0; i < symbol.length; i++) {
        const morseCodeDictKeys = Object.keys(morseCodeDict)
        if (symbol[i] === ' ') {
        } else if (morseCodeDictKeys.includes(symbol[i])) {
            currentMorseValue += symbol[i]
            englishValue = morseCodeDict[currentMorseValue]
        } else {
            englishValue = String.fromCharCode(0xFFFD);
        }

    }
    return englishValue
}




