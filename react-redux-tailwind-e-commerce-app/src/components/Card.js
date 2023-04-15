import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
function Card() {
  const dispatch = useDispatch();
  return (
    <div className='w-1/3 h-full bg-white border fixed top-0 right-0 z-50 p-2'>
      <div className='flex justify-between items-center h-10 p-3 mb-8 border-b'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <IoMdCloseCircle
          onClick={() => dispatch({ type: 'DRAWER', payload: false })}
          size={30}
          className='cursor-pointer'
        />
      </div>
      <div className='h-30 flex items-start justify-between my-2 py-5'>
        <img
          className='h-20'
          src='https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg'
          alt=''
        />
        <div className='w-44'>
          <div className='font-bold'>Solid Gold Petite Micropave</div>
          <div className='opacity-70 text-sm '>
            Satisfaction Guaranteed. Return or 30 days.Designed and sold by
            Hafeez Center in the United States.
          </div>
        </div>
        <div className='font-bold text-lg'>$168</div>
        <div className='w-7 h-7 flex items-center justify-center bg-red-400 text-white p-1 text-center cursor-pointer rounded-full'>
          X
        </div>
      </div>
      <div className='h-30 flex items-start justify-between my-2 py-5'>
        <img
          className='h-20'
          src='https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg'
          alt=''
        />
        <div className='w-44'>
          <div className='font-bold'>Solid Gold Petite Micropave</div>
          <div className='opacity-70 text-sm '>
            Satisfaction Guaranteed. Return or 30 days.Designed and sold by
            Hafeez Center in the United States.
          </div>
        </div>
        <div className='font-bold text-lg'>$168</div>
        <div className='w-7 h-7 flex items-center justify-center bg-red-400 text-white p-1 text-center cursor-pointer rounded-full'>
          X
        </div>
      </div>
      <div className='h-30 flex items-start justify-between my-2 py-5'>
        <img
          className='h-20'
          src='https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg'
          alt=''
        />
        <div className='w-44'>
          <div className='font-bold'>Solid Gold Petite Micropave</div>
          <div className='opacity-70 text-sm '>
            Satisfaction Guaranteed. Return or 30 days.Designed and sold by
            Hafeez Center in the United States.
          </div>
        </div>
        <div className='font-bold text-lg'>$168</div>
        <div className='w-7 h-7 flex items-center justify-center bg-red-400 text-white p-1 text-center cursor-pointer rounded-full'>
          X
        </div>
      </div>
    </div>
  );
}

export default Card;
