import React from 'react';

export default function Quiz() {
  return (
    <div className='quiz'>
      <div className='question'>Who is the protector of seven kingdoms?</div>
      <div className='answers'>
        <div className='answer active'>Tugran Kenger</div>
        <div className='answer'>Eddard Stark</div>
        <div className='answer'>Robert Barethoen</div>
        <div className='answer'>Daenerys Targaryen</div>
      </div>
    </div>
  );
}
