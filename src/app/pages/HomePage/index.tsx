import * as React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import ZipCodeForm from '../../components/HomePage/ZipCodeForm';

interface ZipCodeProps {
  id?: number;
  text?: string;
}

export function HomePage() {
  const zipCodes = useSelector((state: any) => state.zipCodes);
  const zipCodeList = zipCodes?.map((zipCode: ZipCodeProps) => (
    <li className="zipCode" key={zipCode?.id}>
      {zipCode?.text}
    </li>
  ));

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
        <div>
          <ZipCodeForm />
        </div>
        <div className="zipCode-list">
          <ul>{zipCodeList}</ul>
        </div>
      </div>
    </>
  );
}
