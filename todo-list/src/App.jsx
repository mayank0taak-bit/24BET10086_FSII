import { useState } from 'react'

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if(task==="") return;
    setList([...list, task]);
    setTask("");
  };

  const delTask = (idx) => {
    setList(list.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h1>To-do List</h1>
      <input type="text" placeholder="Enter Task"
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={addTask}>ADD</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={()=>delTask(idx)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
