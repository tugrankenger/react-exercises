import React, { useEffect, useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function Room({ username, setUsername, room, setRoom, socket }) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null);
  const { selectedImage, setSelectedImage } = useContext(DataContext);
  const { images } = useContext(DataContext);
  console.log('selectedContextData:', selectedImage);
  useEffect(() => {
    console.log('the selected has changed', selected);
  }, [selected]);

  const handleImageClick = (event) => {
    event.isSelected = true;
    console.log(event);
    setSelected(event.id);
    setSelectedImage(event.id);
    console.log(selected);
  };
  const sendRoom = () => {
    socket.emit('room', room);
    navigate("/chat")
  };
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-[350px] h-[420px] bg-white shadow-xl flex flex-col items-center justify-center gap-y-6 rounded-lg px-5'>
        <h1 className='font-bold text-2xl text-center text-indigo-600 tracking-wider'>
          WELCOME TO CHAT
        </h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border focus:border-indigo-700 p-3 outline-none w-full rounded-lg'
          type='text'
          placeholder='Username'
        />
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className='border focus:border-indigo-700 p-3 outline-none w-full rounded-lg'
          type='text'
          placeholder='Room'
        />
        <div className='w-full p-1'>
          <h3 className='text-sm text-gray-700 pb-5'>Select Avatar</h3>
          <div className='avatars flex items center justify-between'>
            {images &&
              images.map((item, index) => {
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
        </div>
        <div
          onClick={sendRoom}
          className='bg-indigo-400 text-white text-center w-full p-3 rounded-lg cursor-pointer text-xl tracking-wider hover:opacity-70'
        >
          Start Chat
        </div>
      </div>
    </div>
  );
}

export default Room;
