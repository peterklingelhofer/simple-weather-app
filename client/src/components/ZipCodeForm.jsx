import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ZipCodeForm({ addZipCode }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    e.preventDefault();
    if (!value) return;
    if (regexp.test(value)) {
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
