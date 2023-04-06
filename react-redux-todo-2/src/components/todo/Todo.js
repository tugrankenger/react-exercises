import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, deleteAllTodo } from '../../actions';
import './todo.css';
const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
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
              onClick={() => dispatch(addTodo(inputData), setInputData(''))}
            >
              Add
            </button>
          </div>
          <div className='show-items'>
            {list.map((item) => {
              return (
                <div className='item' key={item.id}>
                  <h3>{item.data}</h3>
                  <button
                    className='delete-btn'
                    onClick={() => dispatch(deleteTodo(item.id))}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className='delete-items'></div>
          {list.length > 1 && (
            <button
              className='remove-all-btn'
              onClick={() => dispatch(deleteAllTodo())}
            >
              Remove All Todos
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
