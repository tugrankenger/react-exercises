import React from 'react';

function Chat() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-1/3 h-[600px] bg-chat-image relative'>
        <div className='w-full h-16 bg-gray-200 opacity-95 flex items-center p-3'>
          <div className='rounded-full w-12 h-12 bg-white'></div>
        </div>
        <div className='absolute bottom-0 left-0 w-full flex bg-gray-200 opacity-90 p-3 gap-x-2'>
          <input
            className='w-3/4 border-none rounded-full outline-none p-3 h-12'
            placeholder='Entry message...'
            type='text'
          />
          <button className='w-1/4 bg-indigo-600 rounded-full text-white p-3 h-12 text-xl flex items-center justify-center tracking-wider'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
