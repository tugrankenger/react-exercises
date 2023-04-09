import React from 'react';
import {IoMdCloseCircle} from 'react-icons/io'
import {useDispatch} from 'react-redux'
function Card() {
  const dispatch = useDispatch()
  return (
    <div className='w-1/3 h-full bg-blue-300 border fixed top-0 right-0 z-50'>
      <div className='flex justify-between items-center h-10 p-3'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <IoMdCloseCircle onClick={()=>dispatch({type:'DRAWER',payload:false})} size={30} className='cursor-pointer'/>
      </div>
    </div>
  );
}

export default Card;
