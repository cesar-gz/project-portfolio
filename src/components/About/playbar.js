import React, { useState, useEffect } from 'react';

function Playbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlaybar();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updatePlaybar() {
    const currentDate = new Date();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    // Calculate the width based on the current minutes and seconds
    const newWidth = (currentMinutes * 60 + currentSeconds) / 3600 * 100;
    setWidth(newWidth);
  }

  const playbarStyle = {
    width: `${width}%`
  };

  return (
    <div id="playbar">
      <div id="playbar_inner" style={playbarStyle}></div>
    </div>
  );
}

export default Playbar;
