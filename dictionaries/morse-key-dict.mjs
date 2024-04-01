import { englishKeyDict } from "./english-key-dict.mjs"

const switchEnglishToMorseDict = (englishKeyDict) => {
    const morseCodeDict = {}
    Object.entries(englishKeyDict).forEach(([key, val]) => {
        return morseCodeDict[val] = key
    })
    return morseCodeDict
}


export const morseCodeDict = switchEnglishToMorseDict(englishKeyDict)
