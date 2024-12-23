import caesarCipher from '../caesarCipher';

describe('Caesar Cipher', () => {
  test('shifts letters by 1', () => {
    expect(caesarCipher('abc', 1)).toEqual('bcd');
  });

  test('shifts letters by 2', () => {
    expect(caesarCipher('abc', 2)).toEqual('cde');
  });

  test('wraps around the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc');
  });

  test('maintains case', () => {
    expect(caesarCipher('AbC', 1)).toEqual('BcD');
  });

  test('ignores non-alphabetic characters', () => {
    expect(caesarCipher('a!b.c', 1)).toEqual('b!c.d');
  });

  test('handles negative shift', () => {
    expect(caesarCipher('bcd', -1)).toEqual('abc');
  });
});
