import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [zipCodes, setZipCodes] = useState([]);
  const storedZipCodes = [];

  // Get weather forecast with coordinates
  const getWeatherByCoordinates = (lat, lng, zip, newZipCodes, newZipCode, length) => {
    axios
      .get(`coordinates/${lat}/${lng}`)
      .then((response) => {
        const { data } = response;
        if (length === undefined) {
          const index = newZipCodes.findIndex((location) => location.zip === zip);
          const updatedZipCodes = newZipCodes;
          updatedZipCodes[index].forecast = data;
          setZipCodes(updatedZipCodes);
        } else {
          newZipCode.forecast = data;
          storedZipCodes.push(newZipCode);
          // Set state after all forecasts from database-stored locations have been retrieved
          if (storedZipCodes.length === length) {
            setZipCodes(storedZipCodes);
          }
        }
      })
      .catch((err) => console.log(err));
  }

  const getWeatherByZipCode = (zip, length) => {
    // Get current weather conditions with Zip Code
    axios
      .get(`zipcode/${zip}`)
      .then((response) => {
        const { data } = response;
        const { coord, name, weather, main } = data;
        const { temp } = main;
        const currentConditions = weather[0].description;
        const { lat, lon } = coord;
        const newZipCodes = [
          ...zipCodes,
          { zip, name, currentConditions, temp },
        ];
        const newZipCode = { zip, name, currentConditions, temp };
        // Now that we have coordinates, we can request the forecast
        getWeatherByCoordinates(lat, lon, zip, newZipCodes, newZipCode, length);
      })
      .catch((err) => console.log(err));
  };

  // Add a new zip code location to the list
  const addZipCode = (zip) => {
    if (zipCodes.findIndex((location) => location.zip === zip) < 0) {
      getWeatherByZipCode(zip);
      const newZipCodes = [...zipCodes, { zip }];
      setZipCodes(newZipCodes);
      axios
        .post(`location/${zip}`)
        .catch((err) => console.log(err));
    }
  };

  // Remove a zip code location from the list
  const removeZipCode = (zip) => {
    const newZipCodes = [...zipCodes];
    const index = newZipCodes.findIndex((location) => location.zip === zip);
    newZipCodes.splice(index, 1);
    setZipCodes(newZipCodes);
    axios
      .delete(`location/${zip}`)
      .catch((err) => console.log(err));
  };

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
            getWeatherByZipCode(zip, length);
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
        </span>{' '}
        Weather Tracker
      </h1>
      <div className="zipCode-list">
        <ZipCodeForm addZipCode={addZipCode} />
        {zipCodes.map((zipCode, index) => (
          <ZipCode
            key={index}
            index={index}
            zipCode={zipCode}
            removeZipCode={removeZipCode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
