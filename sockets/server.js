const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

server.listen(3000);
app.use(cors());
app.use(express.static('public'));
io.on('connect',function(socket){
    console.log("Nueva conexion id:" + socket.id)
        socket.on('datos_usuario',function(datos){
            console.log('correo:'+datos.correo + " y usuario:" + datos.usuario);
            io.emit('nuevo_usuario',{user:datos.usuario});
        });
    
        socket.on('send_mensaje',function(datos){
            console.log(datos.usuario + " esta enviando un mensaje.");
            io.emit('nuevo_mensaje',{user:datos.usuario, mensaje:datos.mensaje});
        });
})
