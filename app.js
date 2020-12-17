const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder()
const querystring = require('querystring')
const emojify = require('./emojify')

const getText = body => {
  const query = querystring.parse(body)
  return query.text
}

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
