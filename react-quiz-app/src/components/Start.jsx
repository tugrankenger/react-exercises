import React, { useRef } from 'react';
export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    // setUsername(document.querySelector('.startInput').value)
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className='start'>
      <h1>Enter Username</h1>
      <input ref={inputRef} type='text' className='startInput' />
      <button onClick={handleClick} className='startButton'>
        Start
      </button>
    </div>
  );
}
