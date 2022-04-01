import React from 'react';

export default function Home() {
  return (
    <div>
      {' '}
      <div>
        <select name='cars' id='cars'>
          Choose a car:
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
    </div>
  );
}
