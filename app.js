const express = require('express')
const app = express()
const cors = require('cors')
//app.listen(4000, () => console.log('Example app listening on port 4000!'))

app.use(cors());

//var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log("a user connected");
  socket.on('change', function(data){ console.log(data); io.emit('change', data); });
 });

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/app-client-1.html")
})

app.get("/info", function(req, res){
  res.sendFile(__dirname + "/public/info.html")
});

app.get("/start", function(req, res){
  res.sendFile(__dirname + "/public/app-client-1.html")
});

app.get("/master", function(req, res){
  res.sendFile(__dirname + "/public/app-master.html")
});

//server.listen(4000);
server.listen(4000, () => console.log('Example app listening on port 4000!'))
