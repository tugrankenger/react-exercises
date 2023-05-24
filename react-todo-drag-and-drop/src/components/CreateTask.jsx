import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id:'',
    name:'',
    status:'todo' // can also be inprogress or closed
  });
  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks((prev)=>{
      const list = [...prev, task]
      localStorage.setItem("tasks", JSON.stringify(list))
      return list
    })
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-x-4'>
      <input
        type='text'
        placeholder='Entry todo...'
        className='w-64 outline-none border border-slate-400 focus:border-blue-400 bg-slate-100 rounded-md px-2 h-10'
        onChange={(e)=> setTask({...task, id: uuidv4(), name: e.target.value})}
        value={task.name}
      />
      <button className='bg-blue-400 h-10 rounded-md px-2 text-white hover:bg-blue-500'>
        Create
      </button>
    </form>
  );
};

export default CreateTask;
