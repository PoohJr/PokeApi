import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

 




    return(
            <div className="container">
                    <span>{count}</span>
                <button className='counter-button' onClick={increment}>Add</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={decrease}>Decrease</button>
            </div>
    );

}

export default Counter