import React, { useEffect, useState } from 'react';
import { BsLightbulb, BsFillMoonStarsFill } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import { HiShoppingBag } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const root = document.getElementById('root');
    if (color) {
      root.style.background = '#000000';
      root.style.color = '#efefef';
    } else {
      root.style.background = '#FFFFFF';
      root.style.color = '#000000';
    }
  }, [color]);
  return (
    <div className='flex items-center justify-between px-3 h-20 border-b'>
      <div className='bg-blue-400 rounded-full p-2'>
        <HiShoppingBag size={40} />
      </div>
      <div className='flex space-x-4 items-center'>
        <input
          type='text'
          placeholder='search...'
          className='outline-none border p-3 rounded-lg'
        />
        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsFillMoonStarsFill size={25} className='cursor-pointer' />
          ) : (
            <BsLightbulb size={25} className='cursor-pointer' />
          )}
        </div>
        <div
          onClick={() => dispatch({ type: 'DRAWER', payload: true })}
          className='relative'
        >
          <SlBasket className='cursor-pointer' size={25} />
          <span className='absolute -top-2 -right-2 px-1 rounded-full bg-red-600 text-white text-sm'>
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
