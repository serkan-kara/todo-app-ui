import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ seconds, text }) => {
    const [time, setTime] = useState(seconds);

    const navigate = useNavigate();

    useEffect(() => {
        if (!time) {
            console.log('Timer end');
            navigate('/');
            return;
        }

        const intervalId = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [time, navigate])

    return (
        <div>{text} {time}</div>
    )
}

export default Timer;