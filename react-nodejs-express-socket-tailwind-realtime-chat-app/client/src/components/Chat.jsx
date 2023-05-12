import React, { useEffect, useState, useContext } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { MdSend } from 'react-icons/md';
import DataContext from '../context/DataContext';

function Chat({ socket, username, room }) {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const contextValue = useContext(DataContext);
  
  const userImage = contextValue.images[contextValue.selectedImage - 1].src;

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
        <div className='fixed md:relative top-0 w-full h-16 bg-gray-200 flex items-center p-3'>
          <div className='rounded-full w-12 h-12 bg-white flex items-center gap-x-2'>
            <img src={userImage} alt='' />
            <span className='capitalize text-md'>{username}</span>
          </div>
        </div>
        <div className='w-full h-full md:h-[450px] py-16 md:py-0  overflow-y-auto '>
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
        <div className='md:absolute h-16 fixed bottom-0 left-0 w-full flex justify-between bg-gray-200 p-3 gap-x-2'>
          <input
            onKeyDown={handleKeyDown}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full border-none rounded-full outline-none p-3 '
            placeholder='Entry message...'
            type='text'
          />
          <button
            onClick={sendMessage}
            className='w-12 h-10 rounded-full  bg-indigo-600 flex items-center justify-center text-white text-xl'
          >
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
