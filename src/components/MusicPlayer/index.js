import React, { useState, useRef } from 'react';
import song from '../../assets/audio/kh2.mp3'
import playButton from '../../assets/images/sora3.png'

export default function MusicPlayer() {

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
      <button onClick={handleClick} className="Play"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'transparent',
          marginLeft: '4px',
          cursor: 'pointer'
        }}>
        {isPlaying ? 'Pause' : 'Play'}
        <img src={playButton} className ="Play-Btn" alt="play-button"></img>
      </button>
        <audio ref={audioRef} autoPlay={isPlaying}>
          <source src={song} type="audio/mpeg" />
        </audio>
    </div>
  )
}
