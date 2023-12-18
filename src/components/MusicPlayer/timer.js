import React, { useState, useEffect } from 'react';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateTimer() {
    const currentDate = new Date();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    setMinutes(currentMinutes);
    setSeconds(currentSeconds);
  }

  // Format the output by adding 0 if it is a single digit
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerText = `${formattedMinutes}:${formattedSeconds}`;

  return (
    <div>
      {timerText}
    </div>
  );
}

export default Timer;
