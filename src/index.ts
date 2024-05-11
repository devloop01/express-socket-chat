import express from "express";
import { createServer } from "http";
import { resolve } from "path";
import { Server } from "socket.io";

const host = "0.0.0.0";
const port = parseInt(process.env.PORT || "3000");

const app = express();

app.use(express.static(resolve(__dirname, "../public")));

const httpServer = createServer(app);

const server = httpServer.listen(port, host, undefined, () => {
  console.log("Server listening on port 3000");
});

const io = new Server(server);

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

// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.static(resolve(__dirname, "../public")));
// app.listen(port, () => console.log(`Sever is running port ${port} ...`));
