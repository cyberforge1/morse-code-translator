import { englishToMorseCode, morseCodeToEnglish } from './translation.js';

// ENGLISH TO MORSE CODE TESTS

describe('englishToMorseCode Function', () => {

  it('converts letter A to matching morse code symbol', () => {
      expect(englishToMorseCode('A')).toBe('.-');
  });

  it('converts letter H to matching morse code symbol', () => {
    expect(englishToMorseCode('H')).toBe('....');
});

  it('converts letter Z to matching morse code symbol', () => {
  expect(englishToMorseCode('Z')).toBe('--..');
});

it('converts space to front slash symbol', () => {
  expect(englishToMorseCode(' ')).toBe('/');
});

  it('returns empty string for keys not present in dictionary', () => {
      expect(englishToMorseCode('~')).toBe('');
  });

});


// MORSE CODE TO ENGLISH TESTS

describe('morseCodeToEnglish Function', () => {
it('converts a morse code symbol .- to matching English letter', () => {
      expect(morseCodeToEnglish('.-')).toBe('A');
});

  it('converts a morse code symbol .--. to matching English letter', () => {
    expect(morseCodeToEnglish('.--.')).toBe('P');
});

it('converts a morse code symbol to matching number', () => {
  expect(morseCodeToEnglish('.....')).toBe('5');
});

it('returns a placeholder symbol for morse code symbols not in the dictionary', () => {
    expect(morseCodeToEnglish('------.')).toBe('\uFFFD'); 
});

it('returns a placeholder symbol for an empty string input', () => {
    expect(morseCodeToEnglish('')).toBe('\uFFFD');
});

});