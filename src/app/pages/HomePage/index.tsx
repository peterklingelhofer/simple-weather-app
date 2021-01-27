import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ZipCodeForm from '../../components/HomePage/ZipCodeForm';

export function HomePage() {
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
          <ZipCodeForm />
        </div>
      </div>
    </>
  );
}
