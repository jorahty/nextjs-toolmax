import io from 'socket.io-client';
import { useEffect, useState } from 'react';

let socket;

const socketInitializer = async (setDolphins, setCarrots) => {
  // We just call it because we don't need anything else out of it
  await fetch('/api/socket');

  socket = io();

  socket.on('dolphins', (dolphins, carrots) => {
    setDolphins(dolphins);
    setCarrots(carrots);
  });
};

export default function Home() {
  const [dolphins, setDolphins] = useState(0);
  const [carrots, setCarrots] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    socketInitializer(setDolphins, setCarrots);
  }, []);

  const handleClick = () => {
    socket.emit('add');
  };

  return (
    <div>
      <h1>{dolphins} 🐬</h1>
      <h1>{carrots} 🥕</h1>
      <button onClick={handleClick}>
        + 🥕
      </button>
      <button onClick={() => setLikes(likes + 1)}>
        Like ({likes})
      </button>
    </div>
  );
}
