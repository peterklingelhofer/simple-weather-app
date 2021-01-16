import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [zipCodes, setZipCodes] = useState([]);

  // Get weather forecast with coordinates
  const getWeatherByCoordinates = (lat, lng, zip, newZipCodes) => {
    axios
      .get(`coordinates/${lat}/${lng}`)
      .then((response) => {
        const { data } = response;
        const index = newZipCodes.findIndex((location) => location.zip === zip);
        const updatedZipCodes = newZipCodes;
        updatedZipCodes[index].forecast = data;
        setZipCodes(updatedZipCodes);
      })
      .catch((err) => console.log(err));
  };

  const getWeatherByZipCode = (zip) => {
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
        // Now that we have coordinates, we can request the forecast
        getWeatherByCoordinates(lat, lon, zip, newZipCodes);
        setZipCodes(newZipCodes);
      })
      .catch((err) => console.log(err));
  };

  // Request Location of User
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  // Add a new zip code location to the list
  const addZipCode = (zip) => {
    getWeatherByZipCode(zip);
    const newZipCodes = [...zipCodes, { zip }];
    setZipCodes(newZipCodes);
  };

  // Remove a zip code location from the list
  const removeZipCode = (index) => {
    const newZipCodes = [...zipCodes];
    newZipCodes.splice(index, 1);
    setZipCodes(newZipCodes);
  };

  return (
    <div className="app">
      <h1 className="whiteText">
        <span role="img" aria-label="crystal ball">
          🔮
        </span>{' '}
        Weather Tracker
      </h1>
      <div className="zipCode-list">
        {zipCodes.map((zipCode, index) => (
          <ZipCode
            key={index}
            index={index}
            zipCode={zipCode}
            removeZipCode={removeZipCode}
          />
        ))}
        <ZipCodeForm addZipCode={addZipCode} />
      </div>
    </div>
  );
}

export default App;
