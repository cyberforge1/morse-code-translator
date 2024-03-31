import { dictionaryObj } from './dictionary.js'


export const searchForMatchingKey = (char) => {

    let currentValue = ''

    if (char === ' ') {
        currentValue += '/ '
    }
    const englishKeys = Object.keys(dictionaryObj)

    englishKeys.forEach((key) => {
        const value = dictionaryObj[key]

        if (char === key) {
            currentValue += `${value} `
        }
    })
    return currentValue
}
