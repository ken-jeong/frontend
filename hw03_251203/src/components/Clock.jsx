// components/Clock.jsx
import { useState, useEffect } from "react";

function Clock() {
    // React Hooks - const [state, setState] = useState(초기값);
    const [time, setTime] = useState(new Date());

    // React Hooks - useEffect(() => { ... }, []); // 최초 마운트 시 1회만 실행
    useEffect(() => {
        const timer = setInterval(() => { // setInterval()
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer); // clearInterval()
    }, []);

    return (
        <div className="clock-display">
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Clock;