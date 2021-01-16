const axios = require('axios');
const { app } = require('./app');

const PORT = 8080;
const db = require('./db');
require('dotenv').config();

app.get('/zipcode/:zip', (req, res) => {
  const { zip } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/coordinates/:lat/:lng', (req, res) => {
  const { lat, lng } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
