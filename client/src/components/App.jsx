import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [zipCodes, setZipCodes] = useState([
    // {
    //   zipCode: '22203',
    // },
    // {
    //   zipCode: '70119',
    // },
    // {
    //   zipCode: '90210',
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
        const { coord, name, weather, main } = data;
        const { temp } = main;
        const currentConditions = weather[0].description;
        const { lat, lon } = coord;
        // get weather forecast with coordinates
        getWeatherByCoordinates(lat, lon);
        console.log(data);
        const newZipCodes = [...zipCodes, { zip, name, currentConditions, temp }];
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

  const addZipCode = (zip) => {
    getWeatherByZipCode(zip);
    const newZipCodes = [...zipCodes, { zip }];
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
