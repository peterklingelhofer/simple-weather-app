const mysql = require('mysql');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'mvp';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
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
    connection.query('select * from items', function (error, result) {
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
            function (error, result) {
              if (error) {
                reject(error);
              } else {
                console.log(result);
                resolve(result);
              }
            }
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
    connection.query(`delete from items where zip = ${zip}`, function (error, result) {
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
