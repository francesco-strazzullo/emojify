
const emojify = require('./emojify')

describe('emojify', () => {
  test('should convert standard characters', () => {
    expect(emojify('ciao')).toBe(':alphabet-white-c::alphabet-white-i::alphabet-white-a::alphabet-white-o:')
  })
  test('should manage some special characters', () => {
    expect(emojify('?@!#')).toBe(':alphabet-white-question::alphabet-white-at::alphabet-white-exclamation::alphabet-white-hash:')
  })
  test('should ignore emojis', () => {
    expect(emojify('ciao :poop:')).toBe(':alphabet-white-c::alphabet-white-i::alphabet-white-a::alphabet-white-o: :poop:')
  })
})
