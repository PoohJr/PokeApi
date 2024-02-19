import React, { useState } from "react";
    React

    function ColorPicker(){

        const [color, setColor] = useState("#FFFFFF");

        function changeColor(e){
            setColor(e.target.value)
        }

        return(
            <div className="container">
                <h1>Color Picker</h1>
                <div className="display-color" style= {{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Selected a Color:</label>
                <input type="color" value={color} onChange={changeColor}/>
            </div>
        );
    }

export default ColorPicker