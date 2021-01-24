const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Database connection successful 🗂');
  }
});

const query = util.promisify(connection.query).bind(connection);

async function getItems() {
  try {
    const items = await query('select * from items');
    return items;
  } catch (error) {
    throw error;
  }
}

async function addItem(zip) {
  try {
    await query(`insert into items (zip) values (${zip})`);
  } catch (error) {
    throw error;
  }
}

async function removeItem(zip) {
  try {
    await query(`delete from items where zip = ${zip}`);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getItems,
  addItem,
  removeItem,
};
