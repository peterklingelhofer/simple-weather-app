import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ZipCodeForm({ addZipCode, zipCodes, setZipCodes, storedZipCodes }) {
  const [value, setValue] = useState('');
  const { length } = zipCodes;
  
  const handleSubmit = (e) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    e.preventDefault();
    if (!value) return;
    if (regexp.test(value)) {
      addZipCode(value, zipCodes, setZipCodes, storedZipCodes, length);
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
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
}
