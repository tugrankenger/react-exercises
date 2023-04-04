import { connect } from 'react-redux';
import { addList, toggleList, removeList } from './actions';
import { useState } from 'react';
import './App.css';

function App(props) {
  const [text, setText] = useState('');
  console.log(props.list);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='add-form'>
        <input
          type='text'
          placeholder='Add item'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className='add-btn'
          onClick={() => {
            setText('');
            props.addList(text);
          }}
        >
          Add
        </button>
      </div>
      <div className='list'>
        {props.list.map((item) => (
          <div
            className={`todo-item ${item.status ? 'done' : ''}`}
            key={item.id}
            onClick={() => props.toggleList(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button className='remove-btn' onClick={()=>props.removeList()}>Remove that completed</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { addList, toggleList, removeList })(
  App
);
