import express from 'express';
import socketIo from 'socket.io';
import http from 'http';

const app = express();

const server = http.createServer(app);

const io = socketIo(server);


server.listen(3000);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
  
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);