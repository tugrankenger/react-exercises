import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: '',
    name: '',
    status: 'todo', // can also be inprogress or closed
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3)
      return toast.error('Todo length must be more than 3 characters.', {
        icon: '⚠️',
        style: {
          border: '1px solid #713200',
          padding: '6px',
          color: '#713200',
        },
      });

      if (task.name.length > 50) return toast.error('Todo length must be less than 50 characters.')

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem('tasks', JSON.stringify(list));
      return list;
    });

    toast.success('Task created successfully')

    setTask({
      id: '',
      name: '',
      status: 'todo',
    });
  };
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-x-4'>
      <input
        type='text'
        placeholder='Entry todo...'
        className='w-64 outline-none border border-slate-400 focus:border-blue-400 bg-slate-100 rounded-md px-2 h-10'
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
        value={task.name}
      />
      <button className='bg-blue-400 h-10 rounded-md px-2 text-white hover:bg-blue-500'>
        Create
      </button>
    </form>
  );
};

export default CreateTask;
