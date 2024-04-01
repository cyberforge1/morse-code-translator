import { englishToMorseCode } from '../logic/english-to-morse-logic.mjs';



// ENGLISH TO MORSE CODE TESTS

describe('englishToMorseCode', () => {
  it('should successfully convert letters to morse code', () => {
    expect(englishToMorseCode('A')).toBe('.- ');
  });
  it('should successfully convert letters to morse code', () => {
    expect(englishToMorseCode('G')).toBe('--. ');
  });
  it('should successfully convert letters to morse code', () => {
    expect(englishToMorseCode('N')).toBe('-. ');
  });
});


// MORSE CODE TO ENGLISH TESTS


describe('morseCodeToEnglish function', () => {
  it('should successfully convert morse code to English', () => {
    expect(morseCodeToEnglish('.-')).toBe('A');
    expect(morseCodeToEnglish('-...')).toBe('B');
    expect(morseCodeToEnglish('-.-.')).toBe('C');
  });

  it('should handle non-translatable inputs', () => {
    expect(morseCodeToEnglish('a')).toBe('�');
    expect(morseCodeToEnglish('A')).toBe('�');
    expect(morseCodeToEnglish('%')).toBe('�');
  });
});
