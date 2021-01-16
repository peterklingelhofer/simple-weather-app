import React from 'react';

export default function ZipCode({ zipCode, index, removeZipCode }) {
  return (
    <div
      className="zipCode"
      style={{ textDecoration: zipCode.isCompleted ? 'line-through' : '' }}
    >
      {zipCode.text}
      <div>
        <button onClick={() => removeZipCode(index)}>x</button>
      </div>
    </div>
  );
}
