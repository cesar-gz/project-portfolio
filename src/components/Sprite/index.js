import React from 'react';
import './index.scss';

const Sprite = () => {
  const position = {
    x: window.innerWidth - 100, // Adjust the desired horizontal position here
    y: window.innerHeight - 100, // Adjust the desired vertical position here
  };

  return (
    <div
      className="sprite"
      style={{
        top: position.y,
        left: position.x,
      }}
    />
  );
};

export default Sprite;

/*

const Sprite = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const updatePosition = (event) => {
    const newX = event.clientX;
    const newY = window.innerHeight - 55;
    const angle = Math.atan2(newY - position.y, newX - position.x);
    const newRotation = angle * (180 / Math.PI);
    setPosition({ x: newX, y: newY });
    setRotation(newRotation);
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

  return (
    <div
      className="sprite"
      style={{
        top: position.y,
        left: position.x + 35,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
};

export default Sprite;

*/
