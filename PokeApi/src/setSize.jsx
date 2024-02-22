import React, {useState, useEffect} from "react";

    function setSize(){

        const [width, setWidth] = useState(window.innerWidth)
        const [height, setHeight] = useState(window.innerHeight)

            function handleSize(){
                setWidth(window.innerWidth)
                setHeight(window.innerHeight)
            }

        useEffect(() => {
            window.addEventListener("resize", handleSize);
            console.log("Done Did it")

            return() => {
                window.removeEventListener("resize", handleSize);
                console.log("Removed Event Listener")
            }
        }, [])

            useEffect(() => {
                document.title = `Size :${width} x ${height}`;
            },[width, height])


        return(<>
            <h1 onChange={handleSize}>Windowed Height: {height}px</h1>
            <h1 onChange={handleSize}>Windowed Width: {width}px</h1>
        </>)

    }

    export default setSize