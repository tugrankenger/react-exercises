import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Room from './components/Room';
import io from 'socket.io-client';
import { ContextProvider } from './context/DataContext';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  return (
    <ContextProvider>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Room
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path='/chat'
            element={<Chat socket={socket} username={username} room={room} setUsername={setUsername} setRoom={setRoom} />}
          />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
