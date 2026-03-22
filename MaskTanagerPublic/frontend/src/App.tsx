import { useState, useEffect } from 'react'
import { getTask } from "./service/taskService"
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTask();
      console.log('achou os dados no fetch')
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <div className='taskContainer'>
        {tasks.map((task: any, i) => (
          <div className='task' key={i}>
            <h3 className='taskTitle'>{task.title}</h3>
            <p className='taskDescription'>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
