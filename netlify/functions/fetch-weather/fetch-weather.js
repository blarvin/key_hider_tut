// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios = require ('axios');

const handler = async (event) => {
const {lat, lon} = event.queryStringParameters

  const API_SECRET = process.env.API_SECRET

  const url = `http://api.weatherstack.com/current?access_key=${API_SECRET}&query=${lat},${lon}&forecast_days=4`

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,

      headers,

      body: JSON.stringify(data)
    }
  }

  catch (error) {
    const {status, statusText, headers, data} = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }
