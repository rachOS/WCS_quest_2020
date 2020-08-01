const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
        io.emit('chat message', msg)
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

http.listen(port, () => {
    console.log("listening", port);
});
