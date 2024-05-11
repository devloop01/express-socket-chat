import express from "express";
import { resolve } from "path";
// import { createServer } from "http";
// import { Server } from "socket.io";

const app = express();

app.use(express.static(resolve(__dirname, "../public")));

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

app.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on port 3000");
});
