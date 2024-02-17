import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <input
        type="text"
        value={newTask}
        placeholder="Enter a task.."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default ToDoList;
