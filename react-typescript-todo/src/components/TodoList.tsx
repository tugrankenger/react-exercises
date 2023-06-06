import { useState } from 'react';

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: 'watch the sopranos', completed: false },
    { id: 2, text: 'go to cinema', completed: false },
  ]);

  const [input, setInput] = useState<string>("")

  const addTodo = () =>{
      const newTodo: item ={
        id: new Date().getTime(),
        text:input,
        completed:false
      }
      setTodos([...todos, newTodo])
      setInput("")
  }

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className='main-container'>
      <h1>Todo List</h1>
      <ul>
        {todos.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleToggle(item.id)}
              style={{
                textDecoration: item.completed ? 'line-through' : '',
                cursor: 'pointer',
              }}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
      <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Add todo item' />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
