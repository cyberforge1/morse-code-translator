import { englishKeyDict } from '../dictionaries/english-key-dict.mjs'


// ENGLISH TO MORSE

export const englishToMorseCode = (char) => {

    let currentValue = ''

    if (char === ' ') {
        currentValue += '/ '
    }
    const englishKeys = Object.keys(englishKeyDict)

    englishKeys.forEach((key) => {
        const value = englishKeyDict[key]

        if (char === key) {
            currentValue += `${value} `
        }
    })
    return currentValue
}
