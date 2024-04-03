import { englishKeyDict, morseCodeDict } from './dictionaries.js'


// ENGLISH TO MORSE CODE
export const englishToMorseCode = (char) => {
    if (char === ' ') {
        return '/ ';
    }
    if (char in englishKeyDict) {
        return `${englishKeyDict[char]} `;
    }
    return '';
}


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

