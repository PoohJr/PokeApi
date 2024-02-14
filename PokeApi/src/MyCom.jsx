import React, {useState} from 'react'
import "./index.css"

function MyCom(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [employed, setEmployed] = useState(true)
 
    const updateName = () => {
        setName("Gaborni"); 
    };

    const addAge = () => {
        setAge(age + 1);
    }

    const isEmpolyed = () => {
        setEmployed(!employed)
    } 

    return(
        <div>
            <p>Name: {name}</p>
            <button className='btn1' onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button className='btn1' onClick={addAge}>Add Age</button>

            <p>is {name} Employed: {employed ? "yes" : "no"}</p>
            <button className='btn1' onClick={isEmpolyed}>Is Employed?</button>

            
        </div>

    );

}

export default MyCom