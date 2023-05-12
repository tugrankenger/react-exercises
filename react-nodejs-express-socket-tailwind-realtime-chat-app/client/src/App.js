import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Room from './components/Room';
import io from 'socket.io-client';
import { ContextProvider } from './context/DataContext';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [chatScreen, setChatScreen] = useState(false);
  return (
    <ContextProvider>
      <div className='App'>
        {!chatScreen ? (
          <Room
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            setChatScreen={setChatScreen}
            socket={socket}
          />
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </ContextProvider>
  );
}

export default App;
