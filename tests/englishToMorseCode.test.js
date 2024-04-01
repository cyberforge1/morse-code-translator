import { englishToMorseCode } from './englishToMorseCode';

describe('englishToMorseCode', () => {
  it('should convert "A" to ".-"', () => {
    expect(englishToMorseCode('A')).toBe('.- ');
  });

  it('should convert "E" to "."', () => {
    expect(englishToMorseCode('E')).toBe('. ');
  });

  it('should convert "I" to ".."', () => {
    expect(englishToMorseCode('I')).toBe('.. ');
  });

  it('should convert "O" to "---"', () => {
    expect(englishToMorseCode('O')).toBe('--- ');
  });

  it('should convert "S" to "..."', () => {
    expect(englishToMorseCode('S')).toBe('... ');
  });

  it('should convert "T" to "-"', () => {
    expect(englishToMorseCode('T')).toBe('- ');
  });
});