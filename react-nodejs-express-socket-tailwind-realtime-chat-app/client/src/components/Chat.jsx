import React, { useEffect, useState } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { MdSend } from 'react-icons/md';

function Chat({ socket, username, room }) {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on('returnMessage', (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = async () => {
    const date = new Date();
    const messageContent = {
      username: username,
      message: message,
      room: room,
      date: date.getHours() + ':' + date.getMinutes(),
    };
    await socket.emit('message', messageContent);
    setMessageList((prev) => [...prev, messageContent]);
    setMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && message !== '') {
      sendMessage();
    }
  };
  // console.log(messageList);
  return (
    <div className='flex items-center justify-center h-full '>
      <div className='md:w-1/3 w-full md:h-[600px] h-full  bg-chat-image relative '>
        <div className='w-full h-16 bg-gray-200 opacity-95 flex items-center p-3'>
          <div className='rounded-full w-12 h-12 bg-white'></div>
        </div>
        <div className='w-full h-[465px] overflow-y-auto '>
          <ScrollableFeed forceScroll={true}>
            {messageList &&
              messageList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      username === item.username ? 'flex justify-end' : ''
                    }`}
                  >
                    <div
                      className={`${
                        username === item.username
                          ? ' bg-indigo-600'
                          : 'bg-green-600 '
                      } w-1/2 p-1 text-white m-2 rounded-xl rounded-br-none `}
                    >
                      <div className='pl-1'>{item.message}</div>
                      <div className='w-full flex justify-end text-xs'>
                        {item.username} - {item.date}
                      </div>
                    </div>
                  </div>
                );
              })}
          </ScrollableFeed>
        </div>
        <div className='absolute bottom-0 left-0 w-full flex justify-between bg-gray-200 opacity-90 p-3 gap-x-2'>
          <input
            onKeyDown={handleKeyDown}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full border-none rounded-full outline-none p-3 h-12'
            placeholder='Entry message...'
            type='text'
          />
          <button
            onClick={sendMessage}
            className='w-14 h-12 rounded-full  bg-indigo-600 flex items-center justify-center text-white text-xl'
          >
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
