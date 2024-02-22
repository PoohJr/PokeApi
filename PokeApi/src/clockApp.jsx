import React, {useState, useEffect} from "react";

function ClockApp(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        
    return () => {
        clearInterval(intervalId);
    }
    }, [])

    function formatTime(){
        const hours = time.getHours()
        const mins = time.getMinutes()
        const secs = time.getSeconds()
        const meridiem = hours >= 12 ? "Pm" : "Am" 
    }

    return(<>
        <div className="container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
    </>)
}

export default ClockApp