import React, { useEffect, useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Room({ username, setUsername, room, setRoom, socket }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [errName, setErrName] = useState(false);
  const [errRoom, setErrRoom] = useState(false);
  const [errImg, setErrImg] = useState(false);
  const { selectedImage, setSelectedImage } = useContext(DataContext);
  const { images } = useContext(DataContext);
  console.log('selectedContextData:', selectedImage);

  username = localStorage.getItem('username');
  room = localStorage.getItem('room');

  useEffect(() => {
    localStorage.setItem('images',JSON.stringify(images))
  }, [images]);

  const localImages= () =>{
    const imgLoc = localStorage.getItem('images')
    return imgLoc ? JSON.parse(imgLoc) : []
  }

  console.log("localImages: ", localImages());

  const handleImageClick = (event) => {
    event.isSelected = true;
    setSelected(event.id);
    setSelectedImage(event.id);
    localStorage.setItem('selectedImage',event.id)
  };

  const handleValidation = () => {
    let formIsValidName = true;
    let formIsValidRoom = true;
    let formIsValidImg = true;
    if (username.length < 3 || username === '') {
      setErrName(true);
      formIsValidName = false;
    } else {
      setErrName(false);
      formIsValidName = true;
    }
    if (room.length == '') {
      setErrRoom(true);
      formIsValidRoom = false;
    } else {
      setErrRoom(false);
      formIsValidRoom = true;
    }
    if (selected == null) {
      setErrImg(true);
      formIsValidImg = false;
    } else {
      setErrImg(false);
      formIsValidImg = true;
    }
    return formIsValidName && formIsValidRoom && formIsValidImg;
  };

  const handleUsernameInput = (e) => {
    const inputVal = e.target.value.replace(/[^a-z\s]/gi, '');
    setUsername(localStorage.setItem('username', inputVal));
  };

  const sendRoom = () => {
    socket.emit('room', room);
    if (handleValidation()) {
      navigate('/chat');
    }
  };
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-[350px] h-[460px] bg-white shadow-xl flex flex-col items-center justify-center gap-y-3 rounded-lg px-5'>
        <h1 className='font-bold text-2xl text-center text-indigo-600 tracking-wider'>
          WELCOME TO CHAT
        </h1>
        <div className='w-full flex flex-col'>
          <div className='w-full '>
            <input
              value={username}
              onChange={(e) => handleUsernameInput(e)}
              className={`${
                errName ? 'border-red-600' : ''
              } border focus:border-indigo-700 p-3 outline-none w-full rounded-lg`}
              type='text'
              placeholder='Username'
            />
          </div>
          <div className='errSection h-5'>
            {errName && (
              <span className='text-xs text-red-600'>
                *name is must be more than 2 characters
              </span>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='w-full relative '>
            <input
              value={room}
              onChange={(e) =>
                setRoom(localStorage.setItem('room', e.target.value))
              }
              className={`${
                errRoom ? 'border-red-600' : ''
              } border focus:border-indigo-700 p-3 outline-none w-full rounded-lg`}
              type='number'
              min='0'
              placeholder='Room number'
            />
            <AiOutlineInfoCircle
              onMouseOver={() => setShowPopover(true)}
              onMouseOut={() => setShowPopover(false)}
              onClick={() => setShowPopover(!showPopover)}
              size={25}
              className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer '
            />
            {showPopover && (
              <div className='absolute right-0 bg-gray-300 text-white p-1 rounded-lg'>
                <span>The room number must be the same as the other user.</span>
              </div>
            )}
          </div>
          <div className='errSection h-5'>
            {errRoom && (
              <span className='text-xs text-red-600'>*Room is required</span>
            )}
          </div>
        </div>
        <div className='w-full p-1'>
          <h3 className='text-sm text-gray-700 pb-5'>Select Avatar</h3>
          <div className='avatars flex items center justify-between'>
            {localImages() &&
              localImages().map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      onClick={() => handleImageClick(item)}
                      className={`${
                        item.id === selected ? 'border-green-600' : ''
                      } w-16 h-16 rounded-full object-cover cursor-pointer border p-2`}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                );
              })}
          </div>
          <div className='errSection h-5'>
            {errImg && (
              <span className='text-xs text-red-600'>*avatar is required</span>
            )}
          </div>
        </div>
        <div
          onClick={sendRoom}
          className='bg-indigo-400 text-white text-center w-full p-3 rounded-lg text-xl tracking-wider hover:opacity-70 cursor-pointer'
        >
          Start Chat
        </div>
      </div>
    </div>
  );
}

export default Room;
