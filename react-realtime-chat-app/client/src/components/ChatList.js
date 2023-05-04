import React from 'react';
import styles from './styles.module.css';
import { useChat } from '../context/ChatContext';
import ChatItem from './ChatItem';

function ChatList() {
  const { messages } = useChat();
  console.log('messages : ', messages);
  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => {
          return <ChatItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default ChatList;
