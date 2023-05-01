import io from 'socket.io-client'

let socket;

export const init = () =>{
  console.log("server connecting...");

  socket = io("http://localhost:3001", { transports: ["websocket"]})

  socket.on("connect", ()=> console.log("Connected the server successfully"))
}

export const sendColor = (color) =>{
  socket.emit("newColor", color)
}

export const subscribe = (cb) => {
  socket.on('receive', (color)=>{
    cb(color)
    console.log("receive color: ", color);
  })
}