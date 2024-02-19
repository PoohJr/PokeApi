import React, { useState } from 'react';

function newArray(){

    const [foods, setFoods] = useState(["Apple", "Orange"])

    function arrayAdd(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
     
    }

    function arrayRemove(){
        
    }

    return(<>
        <div className="conatienr">
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Add Food'/>
            <button onClick={arrayAdd}>Add Food</button>
        </div>
    </>);

}



export default newArray