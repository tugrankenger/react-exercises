import './todo.css'
const Todo = () => {
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <figure>
            <figcaption>Add todo item ✏️</figcaption>
          </figure>
          <div className='add-items'>
            <input type='text' placeholder='✍️ Entry item...' />
            <button className='add-btn'>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
