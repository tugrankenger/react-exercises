import { toast } from 'react-hot-toast';
import Task from './Task';
import { useDrag, useDrop } from 'react-dnd';
const StatusSection = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = 'todo';
  let bg = 'bg-slate-500';
  let tasksToMap = todos;

  if (status === 'inprogress') {
    text = 'In Progress';
    bg = 'bg-purple-500';
    tasksToMap = inProgress;
  }
  if (status === 'closed') {
    text = 'Closed';
    bg = 'bg-green-500';
    tasksToMap = closed;
  }

  const addItemToSection = (id) => {
    setTasks((prev)=>{
      const movedTask = prev.map((item)=>{
        if(item.id === id){
          return {...item, status:status}
        }
          return item
      })
      localStorage.setItem("tasks", JSON.stringify(movedTask))
      toast.success("Task status is changed successfully")
      return movedTask
    })
  };
  return (
      <div ref={drop} className={`flex flex-col rounded-lg p-2 ${isOver ? "bg-slate-200": "" }`}>
        <div className={`flex items-center gap-x-2 ${bg} w-64 p-3 rounded-lg`}>
          <h2 className='text-lg uppercase text-white'>{text}</h2>
          <span className='count rounded-full bg-white w-5 h-5 flex items-center justify-center'>
            {tasksToMap.length}
          </span>
        </div>
        {tasksToMap.length > 0 &&
          tasksToMap.map((item) => (
            <Task key={item.id} task={item} tasks={tasks} setTasks={setTasks} />
          ))}
      </div>
  );
};

export default StatusSection;
