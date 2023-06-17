import React, { useState, useEffect } from 'react';
import './index.scss';

const Sprite = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (event) => {
    const newX = event.clientX;
    const newY = event.clientY;
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      updatePosition(event);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="sprite"
    style={{ top: position.y - 55, left: position.x + 35}} />;
};

export default Sprite;
