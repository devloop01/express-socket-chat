import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";

// const app = express();

// app.use(express.static("public"));

// const httpServer = createServer(app);
// const io = new Server(httpServer);

// io.on("connection", (socket) => {
//   const id = socket.id;

//   console.log("user connected", id);

//   socket.on("message", (message, callback) => {
//     const data = { id, message };

//     console.log("message", data);

//     callback(data);
//     socket.broadcast.emit("message", data);
//   });
// });

// httpServer.listen(3000, "0.0.0.0", undefined, () => {
//   console.log("Server listening on port 3000");
// });

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello there! Api is working");
});

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));
