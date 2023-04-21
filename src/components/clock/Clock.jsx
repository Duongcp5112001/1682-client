import React, { useState, useEffect } from 'react';
import "./clock.scss";

function Clock() {
const [time, setTime] = useState(new Date());

useEffect(() => {
    const timerID = setInterval(() => {
    setTime(new Date());
    }, 1000);

    return () => {
    clearInterval(timerID);
    };
}, []);

return (
    <div className="clock">{time.toLocaleTimeString()}</div>
);
}

export default Clock;
