const mysql = require('mysql');
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

const getItems = () => {
  return new Promise((resolve, reject) => {
    connection.query('select * from items', (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const addItem = (zip) => {
  return new Promise((resolve, reject) => {
    getItems()
      .then((result) => {
        if (result.some((item) => item.zip === zip)) {
          reject('Location already stored in mySQL database');
        } else {
          connection.query(
            `insert into items (zip) values (${zip})`,
            (error, res) => {
              if (error) {
                reject(error);
              } else {
                resolve(res);
              }
            },
          );
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const removeItem = (zip) => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from items where zip = ${zip}`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  getItems,
  addItem,
  removeItem,
};
