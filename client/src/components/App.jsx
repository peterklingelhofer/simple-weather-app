import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.jsx';
import ZipCodeForm from './ZipCodeForm.jsx';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [zipCodes, setZipCodes] = useState([
    {
      text: '22203',
    },
    {
      text: '70119',
    },
    {
      text: '90210',
    },
  ]);

  // Request Location of User
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }, []);

  const addZipCode = (text) => {
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
