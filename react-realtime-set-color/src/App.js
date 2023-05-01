import './App.css';
import { useEffect, useState } from 'react';
import { init, subscribe } from './socketApi';
import Palatte from '../src/components/Palatte';
function App() {
  const [activeColor, setActiveColor] = useState('#282c34')
  useEffect(()=>{
    init()
    subscribe((color)=>{
      setActiveColor(color)
    })
  },[])
  document.body.style.backgroundColor = activeColor
  return (
    <div className='App'>
      <Palatte activeColorProp= {activeColor} />
    </div>
  );
}

export default App;
