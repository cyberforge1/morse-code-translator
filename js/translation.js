import { englishKeyDict, morseCodeDict } from './dictionaries.js'


// ENGLISH TO MORSE CODE
export const englishToMorseCode = (char) => {
    if (char === ' ') {
        return '/';
    }
    if (char in englishKeyDict) {
        return `${englishKeyDict[char]}`;
    }
    return '';
}


// MORSE CODE TO ENGLISH
export const morseCodeToEnglish = (morseSymbol) => {
    if (morseCodeDict.hasOwnProperty(morseSymbol)) {
        return morseCodeDict[morseSymbol];
    } else {
        return '\uFFFD';
    }
};

