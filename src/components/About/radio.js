import React, { useState } from 'react';
import theFeed from './music/theFeed.mp3'

export default function RadioPlayer() {

  const [isPlaying, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="Play">
      <button onClick={handleClick} className="Toggle">{isPlaying ? 'Pause' : 'Play'}</button>
      {isPlaying && (
        <audio controls>
          <source src={theFeed} type="audio/mpeg" />
        </audio>
      )}
    </div>
  )
}
