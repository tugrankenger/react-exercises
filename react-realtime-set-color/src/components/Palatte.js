import React, { useState } from 'react';
import { sendColor } from '../socketApi';

function Palatte({activeColorProp}) {
  const [color, setColor] = useState('#000000')
  console.log("palette color: ", color)
  return (
    <div className='palatte'>
      <h1>{activeColorProp}</h1>
      <input type='color' value={activeColorProp} onChange={(e)=>setColor(e.target.value)} />
      <br />
      <button onClick={()=>sendColor(color)}>Set Color</button>
    </div>
  );
}

export default Palatte;
