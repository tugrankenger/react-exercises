import { MdDelete } from 'react-icons/md';
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';

const Task = ({ task, tasks, setTasks }) => {
  const handleRemove = (id) => {
    console.log('delete id: ', id);
    const filteredTask = tasks.filter((item) => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filteredTask));
    setTasks(filteredTask);
    toast.success('todo is deleted successfully');
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log('dragging property: ', isDragging);
  return (
    <div
      ref={drag}
      className={`${
        isDragging ? 'opacity-25' : 'opacity-100'
      } flex  items-center justify-between p-4 mt-8 shadow-md cursor-pointer rounded-md`}
    >
      <p>{task.name}</p>
      <button onClick={() => handleRemove(task.id)}>
        <MdDelete size={20} />
      </button>
    </div>
  );
};

export default Task;
