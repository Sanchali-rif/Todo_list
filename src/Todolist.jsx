import React, { usestate } from "react";
function Todolist() {

    const [Tasks, setTasks] = usestate([]);
    const [newTask, setNewTask] = usestate("");
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