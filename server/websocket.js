var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
io.on('connection', socket=>{
    socket.on('random', value=>{
      console.log(value);
      if(value>0.95){
        if(typeof socket.warnign==='undefined'){
          socket.warning = 0;// socket对象可用来存储状态和自定义数据
        }
        setTimeout(()=>{
          socket.emit('warn', ++socket.warning);
        }, 1000);
      }
    });
});  
server.listen(8090);