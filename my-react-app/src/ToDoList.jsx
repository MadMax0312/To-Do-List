import React, { useState } from "react";
import { toast } from 'react-toastify';


function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "shower", "walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() === "") {
            toast.error('Enter valid task')
        }else if(tasks.some(task => task.toLowerCase() === newTask.toLowerCase())) {
            toast.error('Task already present')
        }
        else{
            setTasks(t => [...t, newTask])
            setNewTask('')
            toast.success('New task added')
        }
        
    }

    function editTask() {
        
    }

    function deleteTask(index) {
        const isConfirmed = window.confirm('Are you sure you want to delete this task?');

        if (isConfirmed) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
            toast.success('Task deleted');
        }
        
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

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
<div className="ol-div">
    
<ol className="">
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">
                        {task}
                    </span>

                    <button
                    className="edit-button"
                    onClick={() => editTask(index)}>
                        Edit
                    </button>

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
        </div>
    );
}

export default ToDoList;
