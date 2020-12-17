
const emojify = require('./emojify')

describe('emojify', () => {
  test('should manage some special characters', () => {
    expect(emojify('?@!#')).toBe(':alphabet-white-question::alphabet-white-at::alphabet-white-exclamation::alphabet-white-hash:')
  })
})
