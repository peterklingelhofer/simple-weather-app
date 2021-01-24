import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  getWeatherByZipCode,
  addZipCode,
  removeZipCode,
} from '../services/weatherHelpers';
import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [zipCodes, setZipCodes] = useState([]);
  const storedZipCodes = [];

  const zipCodesMapped = zipCodes.map((zipCode, index) => (
    <ZipCode
      key={index}
      index={index}
      zipCode={zipCode}
      removeZipCode={removeZipCode}
      zipCodes={zipCodes}
      setZipCodes={setZipCodes}
      storedZipCodes={storedZipCodes}
    />
  ));

  // Get locations stored from previous session
  useEffect(() => {
    if (!zipCodes.length) {
      axios
        .get('location')
        .then((response) => {
          const { data } = response;
          const { length } = data;
          data.forEach((location) => {
            const { zip } = location;
            getWeatherByZipCode(
              zip,
              zipCodes,
              setZipCodes,
              storedZipCodes,
              length,
            );
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="app">
      <h1 className="whiteText">
        <span role="img" aria-label="crystal ball">
          🔮
        </span>
        &nbsp; Weather Tracker
      </h1>
      <div className="zipCode-list">
        <ZipCodeForm
          addZipCode={addZipCode}
          zipCodes={zipCodes}
          setZipCodes={setZipCodes}
          storedZipCodes={storedZipCodes}
        />
        {zipCodesMapped}
      </div>
    </div>
  );
}

export default App;
