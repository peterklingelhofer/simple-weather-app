import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@material-ui/core';

import ZipCode from '../../components/HomePage/ZipCode';
import ZipCodeForm from '../../components/HomePage/ZipCodeForm';

export function HomePage() {
  const [zipCodes, setZipCodes] = useState([]);

  return (
    <>
      <div className="app">
        <Helmet>
          <title>Simple Weather App</title>
          <meta
            name="description"
            content="A simple weather application providing current and future weather conditions"
          />
        </Helmet>
        <h1 className="whiteText">
          <span role="img" aria-label="crystal ball">
            🔮
          </span>
          &nbsp; Weather Tracker
        </h1>
        <div className="zipCode-list">
          {/* <ZipCodeForm 
            // addZipCode={addZipCode}
            // zipCodes={zipCodes}
            // setZipCodes={setZipCodes}
          // />*/}
          {/* {zipCodesMapped} */}
        </div>
      </div>
    </>
  );
}
