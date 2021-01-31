import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ZipCodeForm from '../../components/ZipCodeForm/ZipCodeForm';
import ZipCodeList from '../../components/ZipCodeList/ZipCodeList';
import Geolocation from '../../components/Geolocation/Geolocation';
import { HomePageContainer } from './styled';

export function HomePage() {
  const helmet = (
    <Helmet>
      <title>Simple Weather App</title>
      <meta
        name="description"
        content="A simple weather application providing current and future weather conditions"
      />
    </Helmet>
  );
  const header = (
    <h1 className="whiteText">
      <span role="img" aria-label="crystal ball">
        🔮
      </span>
      &nbsp; Weather Tracker
    </h1>
  );

  return (
    <HomePageContainer>
      <div className="app">
        {helmet}
        {header}
        <Geolocation />
        <ZipCodeForm />
        <ZipCodeList />
      </div>
    </HomePageContainer>
  );
}
