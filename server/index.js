const axios = require('axios');
const { app } = require('./app');
require('dotenv').config();

const PORT = 8080;
const { getItems, addItem, removeItem } = require('./db/index.js');

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});

// Open Weather Map Request for Current Conditions with Zip Code
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

// Open Weather Map Request for Forecast with Coordinates
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

// Retrieve items stored in database
app.get('/location/', (req, res) => {
  getItems()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Storage a new zip code in the database
app.post('/location/:zip', (req, res) => {
  const { zip } = req.params;
  addItem(zip)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// Delete an item stored in database
app.delete('/location/:zip', (req, res) => {
  const { zip } = req.params;
  removeItem(zip)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
