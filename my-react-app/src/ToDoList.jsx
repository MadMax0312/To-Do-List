import React, { useState } from "react";
import { toast } from "react-toastify";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Eat", isEditing: false },
        { text: "Shower", isEditing: false },
        { text: "Walk", isEditing: false }
    ]);
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState('')

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") {
            toast.error("Enter valid task");
        } else if (
            tasks.some((task) => task.toLowerCase() === newTask.toLowerCase())
        ) {
            toast.error("Task already present");
        } else {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
            toast.success("New task added");
        }
    }

    function handleStartEdit(index) {
        const updatedTasks = [...tasks];
        var duplicate = updatedTasks[index].text
        updatedTasks[index].isEditing = true;
        setEditTask(duplicate)
        setTasks(updatedTasks);
    }
    
    function handleEditInputChange(e, index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = e.target.value;
        setTasks(updatedTasks);
    }
    
    function handleEditTask(index) {
        const taskToEdit = tasks[index];
        const isEdited = taskToEdit.text.trim()
    
            if(isEdited === "") {
                toast.error('Task cannot be empty')
            } else {
            const updatedTasks = [...tasks];
            updatedTasks[index].isEditing = false;
            
            setTasks(updatedTasks);
            if (updatedTasks[index].text === editTask) {
                toast.info('No changes made');
            } else {
                toast.success("Task edited");
            }
            }
    }
    

    function deleteTask(index) {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (isConfirmed) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
            toast.success("Task deleted");
        }
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
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
                    {tasks.map((task, index) => (
                        <li key={index}>
                        {task.isEditing ? (
                            <>
                            <input
                                type="text"
                                value={task.text}
                                onChange={e => handleEditInputChange(e, index)}
                            />
                            <button onClick={() => handleEditTask(index)} className="confirm-button">Ok</button>
                            </>
                        ) : (
                            <>
                                <span className="text">{task.text}</span>
                                <button
                                    className="edit-button"
                                    onClick={() => handleStartEdit(index)}
                                >
                                    Edit
                                </button>
                            </>
                        )}

                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}
                            >
                                &#x2B06; {/* Up arrow emoji */}
                            </button>

                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}
                            >
                                &#x2B07; {/* Down arrow emoji */}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
