import React, { useState, useRef } from 'react';
import song from '../../assets/audio/kh2.mp3';
import playButton from '../../assets/images/music-off.png'; // Default play image
import pauseButton from '../../assets/images/music-on.png'; // New pause image

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
      <button
        onClick={handleClick}
        className="Play"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'transparent',
          marginLeft: '4px',
          cursor: 'pointer'
        }}
      >
        <img
          src={isPlaying ? pauseButton : playButton}
          className="Play-Btn"
          alt={isPlaying ? 'pause-button' : 'play-button'}
        />
      </button>
      <audio ref={audioRef} autoPlay={isPlaying}>
        <source src={song} type="audio/mpeg" />
      </audio>
    </div>
  );
}
