import { Server } from 'socket.io';

export default function SocketHandler(req, res) {
  if (res.socket.server.io) return res.end('already set up'); // already set up

  // Below is code to set up socket.
  // The code below should only be run once, when server is first pinged.
  
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  // create world
  let carrots = 0;

  // handle connection
  io.on('connection', socket => {
    // welcome!

    socket.on('add', () => {
      carrots++;
    });
  });

  // emit regular updates
  setInterval(() => {
    const dolphins = Math.floor(Math.random() * 50);

    io.emit('dolphins', dolphins, carrots);
  }, 1000);

  res.end();
}
