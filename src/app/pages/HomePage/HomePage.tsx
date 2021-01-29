import * as React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import ZipCodeForm from '../../components/ZipCodeForm/ZipCodeForm';
import ZipCode from '../../components/ZipCode/ZipCode';
import { ZipCodeProps } from './types';

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
  const zipCodes = useSelector((state: any) => state.zipCodes);
  const zipCodeList = (
    <div className="zipCode-list">
      {zipCodes?.map((zipCode: ZipCodeProps) => (
        <ZipCode key={zipCode.id} id={zipCode.id} text={zipCode.text} />
      ))}
    </div>
  );
  return (
    <>
      <div className="app">
        {helmet}
        {header}
        <ZipCodeForm />
        {zipCodeList}
      </div>
    </>
  );
}
