import React, { useState, useRef } from 'react';
import theFeed from './music/theFeed.mp3'
import playButton from './music/play.png'

export default function RadioPlayer() {

  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handleClick} className="Play">
        {isPlaying ? 'Pause' : 'Play'}
        <img src={playButton} className ="Play-Btn" alt="play-button"></img>
      </button>
        <audio ref={audioRef} autoPlay={isPlaying}>
          <source src={theFeed} type="audio/mpeg" />
        </audio>
    </div>
  )
}
