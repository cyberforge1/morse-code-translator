import { englishKeyDict, morseCodeDict } from './dictionaries.js'

// ENGLISH TO MORSE CODE TRANSLATOR

export const englishToMorseCode = (char) => {
    if (typeof char !== 'string' || char == null) {
        throw new Error('Invalid input');
    }

    if (char === ' ') {
        return '/';
    }

    if (char in englishKeyDict) {
        return `${englishKeyDict[char]}`;
    }
    
    return '';
}

// MORSE CODE TO ENGLISH TRANSLATOR

export const morseCodeToEnglish = (morseSymbol) => {
    if (typeof morseSymbol !== 'string' || morseSymbol == null) {
        throw new Error('Invalid input');
    }

    if (morseCodeDict.hasOwnProperty(morseSymbol)) {
        return morseCodeDict[morseSymbol];
    } else {
        return '\uFFFD';
    }
};