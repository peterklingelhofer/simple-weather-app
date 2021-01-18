import React from 'react';

export default function ZipCodeForm({ addZipCode }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addZipCode(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input formControl"
        placeholder="Enter zip code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
