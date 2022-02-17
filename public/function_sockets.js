const socket = io.connect();

socket.on('nuevo_mensaje',function(datos){
    mensajes = document.getElementById("content_mensajes");
    let p = document.createElement("p")

    mensajes.append(datos.user +": "+ datos.mensaje , p)

})
function logear() {
    correo = document.getElementById("email").value;
    usuario = document.getElementById("user").value;
    socket.emit('datos_usuario',{correo:correo, usuario:usuario})
}

function enviar_msj() {
    mensaje = document.getElementById("mensaje").value
   
    socket.emit('send_mensaje', {mensaje:mensaje,usuario:usuario});
}

