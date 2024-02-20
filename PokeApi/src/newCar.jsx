import React, {useState} from "react";

    function newCar(){

        const [cars, setCars] = useState([])
        const [caryear, setCarYear] = useState(new Date().getFullYear)
        const [carmake, setCarMake] = useState("")
        const [carmodel, setCarModel] = useState("")

        function addCar(){

        }

        function removeCar(index){
            
        }

        return(<>
        <h1></h1>
        </>);
    }

    export default newCar