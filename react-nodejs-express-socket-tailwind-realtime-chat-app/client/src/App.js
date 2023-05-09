import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Room from './components/Room';

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className='App'>
      <Room
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
      />
      {/* <Chat/> */}
    </div>
  );
}

export default App;
