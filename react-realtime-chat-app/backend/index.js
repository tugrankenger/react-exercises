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

  socket.on("new-message", (message) =>{
    console.log("new-message", message)
    Messages.upsert({message})
  })

  socket.on('disconnect', () => console.log('a user is disconnected'));
});


http.listen(process.env.PORT || '3000', () => {
  console.log('listening on 3000');
});
