import { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  {
    id: 1,
    title: 'Shopping',
    status: false,
  },
  {
    id: 2,
    title: 'Play CS:GO',
    status: true,
  },
  {
    id: 3,
    title: 'Read book',
    status: true,
  },
];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='add-form'>
        <input type='text' placeholder='Add item' />
        <button className='add-btn'>Add</button>
      </div>
      <div className='list'>
        {list.map((item) => (
          <div className={item.status ? 'done' : ''} key={item.id}>
            {item.title}
          </div>
        ))}
      </div>
      <button className='remove-btn'>Remove that completed</button>
    </div>
  );
}

export default App;
