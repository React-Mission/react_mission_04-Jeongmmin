import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    
    const add =() => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    }

    const toggleHandler = () => {
        setDisabled(!disabled);
        if (!disabled) {
            console.log("on");

        }else {
            console.log("off");
            
        }
    }


    return (
        <div>
            <p className="counterNum">{count}</p>
            <button disabled={!disabled} onClick={minus} className="minusBtn">➖</button>
            <button disabled={!disabled} onClick={add} className="plusBtn">➕</button><br/>
            <button onClick={toggleHandler} className="on_offBtn" style={{  backgroundColor: "cornflowerblue"}}>On / Off</button>
        </div>
    )
};

export default Counter;