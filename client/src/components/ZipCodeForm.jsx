import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function ZipCodeForm({
  addZipCode,
  zipCodes,
  setZipCodes,
  storedZipCodes,
}) {
  const [value, setValue] = useState('');
  const [formValidation, setFormValidation] = useState(false);
  const [formValidationSuccess, setFormValidationSuccess] = useState(false);
  const { length } = zipCodes;

  useEffect(() => {
    formValidation && setFormValidation(false);
    value && formValidationSuccess && setFormValidationSuccess(false);
  }, [value]);

  const handleSubmit = (e) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    e.preventDefault();
    if (!value) return;
    if (regexp.test(value)) {
      addZipCode(value, zipCodes, setZipCodes, storedZipCodes, length);
      setValue('');
      setFormValidationSuccess(true);
    } else {
      setFormValidation(true);
    }
  };

  const zipCodeInvalid = formValidation && (
    <div className="redText center">Please provide a valid zip code.</div>
  );

  const zipCodeValid = formValidationSuccess && (
    <div className="greenText center">Valid zip code provided.</div>
  );

  return (
    <div className="zipCodeSubmit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input formControl"
          placeholder="Enter Zip Code"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {zipCodeInvalid}{zipCodeValid}
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
}
