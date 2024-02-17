import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "shower", "walk"]);
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
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Enter a task.."
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">
                        {task}
                    </span>
                    <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>

                    <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                       &#x2B06; {/* Up arrow emoji */}
                    </button>

                    <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                        &#x2B07; {/* Down arrow emoji */}
                    </button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;
