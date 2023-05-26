import Task from './Task';
const StatusSection = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}) => {
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
  return (
    <>
      <div className='flex flex-col'>
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
    </>
  );
};

export default StatusSection;
