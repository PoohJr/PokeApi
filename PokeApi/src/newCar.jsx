// i need to study this cause idk filter maps and parameters
import React, {useState} from "react";

    function newCar(){

        const [cars, setCars] = useState([])
        const [caryear, setCarYear] = useState(new Date().getFullYear())
        const [carmake, setCarMake] = useState("")
        const [carmodel, setCarModel] = useState("")

        function addCar(){
            const brandnewCar = {year: caryear,
                                make: carmake, 
                                model: carmodel};
                setCars (c => [...c, brandnewCar])
                
                setCarYear(new Date().getFullYear())
                setCarMake("")
                setCarModel("")
        }

        function removeCar(index){
            setCars(c => c.filter((_, i) => i !== index)); 
        }

        function makeChange(e){
            setCarMake(e.target.value)
        }

        function modelChange(e){
            setCarModel(e.target.value)
        }

        function yearChange(e){
            setCarYear(e.target.value)
        }
        return(<>
        <div className="container">
            <h2>List of Cars Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => removeCar (index)}>
                        {car.year} {car.make} {car.model}
                    </li> )}
            </ul>

            <input type="number" value={caryear} onChange={yearChange}/><br/>
            <input type="text" value={carmake} onChange={makeChange} placeholder="Place Make of Cars"/><br/>
            <input type="text" value={carmodel} onChange={modelChange} placeholder="Place Model of Cars"/><br/>
            <br></br>

            <button onClick={addCar}>Add Car</button>
        </div>
        </>);
    }

    export default newCar