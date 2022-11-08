import React, {useState, useEffect} from 'react';
function Timer() {
    const [time, setTime] = useState(10);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((time) => time - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }, []);
    return <h1>Time : {time}</h1>
};
export default Timer;