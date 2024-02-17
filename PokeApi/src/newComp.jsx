import React, {useState} from "react";

    function newComp(){

        const [name, setName] = useState("player 1")

        function handleClick(e){
            setName(e.target.value)
        }


    return(
        <div>
             <input value={name} onChange={handleClick} type="text" />
             <p>Name: {name}</p>
        </div>);
    }


    export default newComp