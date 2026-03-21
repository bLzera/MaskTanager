import { useState, useEffect } from 'react'
import { api } from "./service/api"
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/Task')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
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
