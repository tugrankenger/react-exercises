import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';
import './todo.css';
const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <figure>
            <figcaption>Add todo item ✏️</figcaption>
          </figure>
          <div className='add-items'>
            <input
              type='text'
              placeholder='✍️ Entry item...'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button
              className='add-btn'
              onClick={() => dispatch(addTodo(inputData))}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
