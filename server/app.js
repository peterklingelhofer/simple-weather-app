const express = require('express');
const path = require('path');
const { apiRouter } = require('./api');

const app = express();

const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use('/api', apiRouter);

module.exports = {
  app,
};
