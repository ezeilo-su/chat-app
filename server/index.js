const app = require('express')();
const morgan = require('morgan');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const router = require('./src/routes');
const port = 3001;

app.use(morgan('dev'));

io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('disconnect', () => {
    console.log('User has left');
  });
});

app.use(router);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
