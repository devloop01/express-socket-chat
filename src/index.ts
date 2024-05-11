import express from "express";
import { createServer } from "http";
import { resolve } from "path";
import { Server } from "socket.io";

const app = express();

app.use(express.static(resolve(__dirname, "../public")));

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  const id = socket.id;

  console.log("user connected", id);

  socket.on("message", (message, callback) => {
    const data = { id, message };

    console.log("message", data);

    callback(data);
    socket.broadcast.emit("message", data);
  });
});

httpServer.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// const app = express();

// const port = process.env.PORT || 3000;

// app.use(express.static(resolve(__dirname, "../public")));

// app.listen(port, () => console.log(`Sever is running port ${port} ...`));
