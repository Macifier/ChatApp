const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET , POST , PUT , PATCH , DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type , Authorization");
  next();
});

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "Bot",
      text: `${user.name}, Welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Bot", text: `${user.name}  joined chat !` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Bot",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(process.env.PORT || 8080, () =>
  console.log(`Server started on port number 8080.`)
);
