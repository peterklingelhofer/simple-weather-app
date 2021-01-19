import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ZipCodeForm({ addZipCode }) {
  const [value, setValue] = useState('');

  // Check that the ZipCode entered is a valid US Zip Code
  const isUSZipCode = (zip) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(zip)) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (isUSZipCode(value)) {
      addZipCode(value);
      setValue('');
    }
  };

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
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
