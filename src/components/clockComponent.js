import React, { useState, useEffect } from "react";

// css
import "../css/clockComponent.css";

function newPadStart(value) {
  return value.toString().padStart(2, "0");
}

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval khi component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6 + seconds / 60;
  const hours = (time.getHours() % 12) * 30 + minutes / 12;

  return (
    <div className="clock-box">
      <div className="clock-frame">
        <div
        id="hour-hand"
          className="hand "
          style={{ transform: `rotate(${hours}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minutes}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${seconds}deg)` }}
        ></div>
      </div>
      <p id="time-box">{`${newPadStart(time.getHours())}:${newPadStart(
        time.getMinutes()
      )}:${newPadStart(time.getSeconds())}`}</p>
    </div>
  );
};

export default ClockComponent;
