const caesarCipher = (str, num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();
  let newStr = '';
  for (let index = 0; index < lowerStr.length; index += 1) {
    const currentLetter = lowerStr[index];
    if (!alphabet.includes(currentLetter)) {
      newStr += currentLetter;
    } else if (currentLetter === ' ') {
      newStr += currentLetter;
    } else {
      const currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + num;
      if (newIndex > 25) {
        newIndex -= 26;
      }
      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      if (str[index] === str[index].toUpperCase()) {
        newStr += alphabet[newIndex].toUpperCase();
      } else {
        newStr += alphabet[newIndex];
      }
    }
  }
  return newStr;
};
export default caesarCipher;
