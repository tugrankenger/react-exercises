import React, { useState } from 'react';
import styles from './styles.module.css';

function ChatForm() {
  const [message, setMessage] = useState('');
  console.log("messageState: ",message);
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMessage("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
