const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder()
const querystring = require('querystring')

const getText = body => {
  const query = querystring.parse(body)
  return query.text
}

const isChar = char => Boolean(char.match(/[a-z]/i))
const emojify = (text = '') => text.toLowerCase().split('').map(char => {
  if (!isChar(char)) {
    return char
  }

  return `:alphabet-white-${char}:`
}).join('')

api.get('/', async (request) => {
  return emojify(request.queryString.text)
})

api.post('/slack', async (request) => {
  console.log(request.body)
  return {
    response_type: 'in_channel',
    text: emojify(getText(request.body))
  }
})

module.exports = api
