const express = require('express')
const app = express()
const port = 3000

const path = require('path');

const server = require('http').createServer(app);
server.listen(3000);
const { Server } = require("socket.io");

const io = new Server(server);

io.on('connect',
  socket => {
    socket.on('mess',
      (data) => {
        console.log('data');
        io.emit('user-chat', data);
      }
    );
  }

)

app.get('/home',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'index/html'));
  }
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

