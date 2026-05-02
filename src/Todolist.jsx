import React, { useState } from "react";
function Todolist() {
    const [tasks, setTasks] = useState(["eat breakfast", "drink water", "exercise", "sleep", "study", "code"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => ([...t, newTask]));
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTask = tasks.filter((_, index) => index !== index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index - 1], updatedTask[index]] = [updatedTask[index], updatedTask[index - 1]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index + 1], updatedTask[index]] = [updatedTask[index], updatedTask[index + 1]];
            setTasks(updatedTask);
        }
    }
    return (
        <div className="to-do-list">
            <h1>Todo-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter the task"
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}
                >Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-up-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-down-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default Todolist