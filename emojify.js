const SPECIAL_CONVERTIONS = {
  '?': ':alphabet-white-question:',
  '@': ':alphabet-white-at:',
  '!': ':alphabet-white-exclamation:',
  '#': ':alphabet-white-hash:'
}

const isChar = char => Boolean(char.match(/[a-z]/i))

const convertWord = word => word.toLowerCase().split('').map(char => {
  const maybeSpecialConvertedChar = SPECIAL_CONVERTIONS[char]
  if (maybeSpecialConvertedChar) {
    return maybeSpecialConvertedChar
  }

  if (!isChar(char)) {
    return char
  }

  return `:alphabet-white-${char}:`
}).join('')

const emojify = (text = '') => {
  const words = text.split(' ')

  return words.map(word => {
    if (/:.*?:/gm.test(word)) {
      return word
    }

    return convertWord(word)
  }).join(' ')
}

module.exports = emojify
