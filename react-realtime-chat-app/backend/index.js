const app = require("express")();
const http = require("http").Server(app)
const io = require("socket.io")(http)
const cors = require("cors")

app.use(cors)

app.get("/",(req,res)=>{
  res.end("Hello socket.io")
})

io.on("connection", (socket)=>{
  console.log("a user connected");
})

http.listen(process.env.PORT || "3000", () =>{
  console.log("listening on 3000");
})