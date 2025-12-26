
// TaskDashboard.jsx
import React, { useState } from "react";

const TaskDashboard = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // Remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((taskItem, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {taskItem}
            <button
              onClick={() => removeTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;







// App.jsx
import React from "react";
import TaskDashboard from "./assets/core consept/Hello world/Dashboard/dashboard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task List Dashboard</h1>
      <TaskDashboard />
    </div>
  );
}

export default App;




 One attachment
  •  Scanned by Gmail
Displaying Screenshot (1).png.
