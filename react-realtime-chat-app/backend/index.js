const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const Messages = require("./lib/Messages")

app.use(cors);

app.get('/', (req, res) => {
  res.end('Hello socket.io');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  Messages.list((data)=>{
    console.log("redis messages data: ", data)
    socket.emit("message-list", data)
  })

  socket.on("new-message", (message) =>{
    console.log("new-message", message)
    Messages.upsert({message})
    socket.broadcast.emit("receive-message", message)
  })

  socket.on('disconnect', () => console.log('a user is disconnected'));
});


http.listen(process.env.PORT || '3000', () => {
  console.log('listening on 3000');
});
