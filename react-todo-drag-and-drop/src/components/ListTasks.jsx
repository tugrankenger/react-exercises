import { useEffect, useState } from 'react';
import StatusSection from './StatusSection';

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setDodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const filteredTodos = tasks.filter((item) => item.status === 'todo');
    const filteredInPorgress = tasks.filter(
      (item) => item.status === 'inprogress'
    );
    const filteredClosed = tasks.filter((item) => item.status === 'closed');
    setDodos(filteredTodos);
    setInProgress(filteredInPorgress);
    setClosed(filteredClosed);
  }, [tasks]);

  const statuses = ['todo', 'inprogress', 'closed'];

  return (
    <div className='flex gap-20'>
      {statuses.map((item, index) => (
        <StatusSection
          key={index}
          status={item}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
