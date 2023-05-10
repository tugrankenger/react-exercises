import React, { useState } from 'react';

function Chat({ socket, username, room }) {
  const [message, setMessage] = useState('');

  const sendMessage = async() => {
    const date = new Date
    const messageContent = {
      username: username,
      message: message,
      room: room,
      date: date.getHours() + ':' + date.getMinutes()
    }
    await socket.emit('message', messageContent);

  };
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-1/3 h-[600px] bg-chat-image relative'>
        <div className='w-full h-16 bg-gray-200 opacity-95 flex items-center p-3'>
          <div className='rounded-full w-12 h-12 bg-white'></div>
        </div>
        <div className='w-full h-[400px] overflow-y-auto'>
          <div className='w-1/2 h-12 p-1 bg-indigo-600 text-white m-2 rounded-xl rounded-br-none'>
            <div>test message</div>
            <div className='w-full flex justify-end text-xs'>
              tugrankenger - 09.05.2023
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='w-1/2 h-12 p-1 bg-green-600 text-white m-2 rounded-xl rounded-br-none'>
              <div>test message</div>
              <div className='w-full flex justify-end text-xs'>
                tugrankenger - 09.05.2023
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full flex bg-gray-200 opacity-90 p-3 gap-x-2'>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-3/4 border-none rounded-full outline-none p-3 h-12'
            placeholder='Entry message...'
            type='text'
          />
          <button
            onClick={sendMessage}
            className='w-1/4 bg-indigo-600 rounded-full text-white p-3 h-12 text-xl flex items-center justify-center tracking-wider'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
