import React, { useEffect, useRef, useState } from 'react';

function Lifecycle(props) {
    const [color, setColor] = useState("deeppink");
    const [hello, setHello] = useState("everyone");
    const [time, setTime] = useState(null);
    const intervalRef = useRef(null);

    const getRandomColor = () => {
        const COLOR_LIST = ["white", "deeppink", "green", "yellow", "black", "blue", "reed"];
        const randomIndex = Math.trunc(Math.random() * 7);
        return COLOR_LIST[randomIndex];
    };

    const handleClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('lifecycle', newColor);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const now = new Date();
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const serconds = `0${now.getSeconds()}`.slice(-2);
            const currentTime = `${hours}:${minutes}:${serconds}`;

            setTime(currentTime);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            <div className="time">{time}</div>
            <div className="lifecycle" style={{ backgroundColor: color }}>
                <h1>Demo State and lifecycle in Reactjs</h1>
                <h2>hello {hello}</h2>
                <button onClick={handleClick}>Click me!</button>
            </div>
        </div>
    );
}

export default Lifecycle;