import React, {useState} from "react";

function TodoList(){

    const [tasks, setTasks] = useState(["fight kangaous", "fight monkeys", "fight gorillas"]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(e){
        setNewTask(e.target.value)

    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks( t => [...t, newTask]);
            setNewTask("");
        }

       
    }

    function removeTask(index){
        
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)

    }

    function moveTaskup(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index] ]
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index] ]
            setTasks(updatedTasks);
        }
    }


    return(<>
    <div className="container">
        <h1>To Do List</h1>
            <div className="in">
                <input id="doing" type="text" value={newTask}
                        onChange={handleInputChange}
                        placeholder="Place new Task"></input>
                        <button className="add-btn" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="dlt" onClick={() => removeTask(index)}>Delete</button>
                        <button className="move-up" onClick={() => moveTaskup(index)} >Move Up</button>
                        <button className="move-up" onClick={() => moveTaskDown(index)} >Move Down</button>
                    </li>
                )}
            </ol>
    </div>
    </>);
}


export default TodoList