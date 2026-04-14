import React, { useState } from "react";
function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event) {

    }
    function addTask() {

    }
    function deleteTask(index) {

    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {

    }
    return (
        <div className="to-do-list">
            <h1>Todo-List</h1>
        </div>
    );
}
export default Todolist