const express = require('express')
const request = require('request')
require('dotenv').config()
const app = express()

app.set('port', (process.env.PORT || 3001));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/country/:country', function(req, res) {
  request(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${req.params.country}&api_key=${process.env.LAST_FM_API_KEY}&format=json&limit=5`, (error, response, body) => {
    if (error) {
      const status = response && response.statusCode ? response.statusCode : 500;
      res.status(status).json({error: error});
    } else if (JSON.parse(body).error) {
      res.status(500).json({error: JSON.parse(body).message});
    } else {
      res.status(200).json(JSON.parse(body));
    }
  })
})

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
