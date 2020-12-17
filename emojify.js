const SPECIAL_CONVERTIONS = {
  '?': ':alphabet-white-question:',
  '@': ':alphabet-white-at:',
  '!': ':alphabet-white-exclamation:',
  '#': ':alphabet-white-hash:'
}

const isChar = char => Boolean(char.match(/[a-z]/i))
const emojify = (text = '') => text.toLowerCase().split('').map(char => {
  const maybeSpecialConvertedChar = SPECIAL_CONVERTIONS[char]
  if (maybeSpecialConvertedChar) {
    return maybeSpecialConvertedChar
  }

  if (!isChar(char)) {
    return char
  }

  return `:alphabet-white-${char}:`
}).join('')

module.exports = emojify
