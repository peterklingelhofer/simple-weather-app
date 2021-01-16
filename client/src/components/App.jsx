import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [zipCodes, setZipCodes] = useState([
    // {
    //   text: '22203',
    // },
    // {
    //   text: '70119',
    // },
    // {
    //   text: '90210',
    // },
  ]);

  const getWeatherByCoordinates = (lat, lng) => {
    axios
      .get(`coordinates/${lat}/${lng}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getWeatherByZipCode = (zip) => {
    // get current weather conditions with Zip Code
    axios
      .get(`zipcode/${zip}`)
      .then((response) => {
        const { data } = response;
        const { coord } = data;
        const { lat, lon } = coord;
        // get weather forecast with coordinates
        getWeatherByCoordinates(lat, lon);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // Request Location of User
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
      // getWeatherByCoordinates(latitude, longitude);
    });
  }, []);

  const addZipCode = (text) => {
    getWeatherByZipCode(text);
    const newZipCodes = [...zipCodes, { text }];
    setZipCodes(newZipCodes);
  };

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
