import React, {useState} from "react";

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(e){
        setNewTask(e.target.value)

    }

    function addTask(){

    }

    function removeTask(index){

    }

    function moveTaskup(index){

    }
    
    function moveTaskDown(index){

    }


    return(<>
    <div className="container">
        <h1>To Do List</h1>
            <div className="in">
                <input type="text" value={newTask}
                        onChange={handleInputChange}
                        placeholder="Place new Task"></input>
                        <button className="add-btn" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="dlt" onClick={removeTask}>Delete</button>
                    </li>
                )}
            </ol>
    </div>
    </>);
}


export default TodoList