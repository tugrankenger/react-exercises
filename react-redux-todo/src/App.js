import { connect } from 'react-redux';
import './App.css';

function App(props) {
  console.log(props.list);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='add-form'>
        <input type='text' placeholder='Add item' />
        <button className='add-btn'>Add</button>
      </div>
      <div className='list'>
        {props.list.map((item) => (
          <div className={item.status ? 'done' : ''} key={item.id}>
            {item.title}
          </div>
        ))}
      </div>
      <button className='remove-btn'>Remove that completed</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps)(App);
