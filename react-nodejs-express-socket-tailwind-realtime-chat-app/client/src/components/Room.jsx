import React from 'react';

function Room({ username, setUsername, room, setRoom, setChatScreen, socket }) {
  const sendRoom = () =>{
    socket.emit('room', room)
    setChatScreen(true)
    console.log("username: ", username);
    console.log("room: ", room);
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-[350px] h-[320px] bg-white shadow-xl flex flex-col items-center justify-center gap-y-6 rounded-lg px-5'>
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
        <div onClick={sendRoom} className='bg-indigo-400 text-white text-center w-full p-3 rounded-lg cursor-pointer text-xl tracking-wider hover:opacity-70'>
          Start Chat
        </div>
      </div>
    </div>
  );
}

export default Room;
