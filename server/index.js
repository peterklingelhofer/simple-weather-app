const axios = require('axios');
const { app } = require('./app');

const PORT = 8080;
const db = require('./db');
require('dotenv').config();

app.get('/coordinates/:lat/:lng', (req, res) => {
  const { lat, lng } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    )
    .then(({ data }) => {
      // console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
