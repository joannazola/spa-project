const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const fs = require("fs");

// Endble CORS
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello! I am listening!</h1>");
});

io.on("connection", (socket) => {
  console.log("New user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  socket.on("message", function (data) {
    console.log(data);
  });
  socket.on("read", function (message) {
    fs.readFile("database.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.users.push({
          username: message.username,
          password: message.password,
        });
        json = JSON.stringify(obj);
        fs.writeFile("database.json", json, "utf8", function (err) {
          if (err) throw err;
          console.log("complete");
        });
      }
    });
  });
});

server.listen(4000, () => {
  console.log("Server listening on port 4000!");
});
