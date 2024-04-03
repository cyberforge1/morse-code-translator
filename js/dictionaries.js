export const englishKeyDict = 
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


const switchEnglishToMorseDict = (englishKeyDict) => {
    return Object.entries(englishKeyDict).reduce((acc, [key, val]) => {
        acc[val] = key;
        return acc;
    }, {});
}


export const morseCodeDict = switchEnglishToMorseDict(englishKeyDict)