const { app } = require('./app');
const axios = require('axios');
const PORT = 8080;
const db = require('./db');

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
