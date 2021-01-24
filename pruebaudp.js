console.log('inicializando');


const dgram = require("dgram");

var server = dgram.createSocket("udp4");
var variable = 0;

server.on("message", function (msg, rinfo) {
	let mensaje = "el servidor ha recibido: " + msg + " de " + rinfo.address + ":" + rinfo.port;
	console.log(mensaje);
	server.send("variable = " + variable,rinfo.port,rinfo.address);  
});


function ActualizarVariable(){
	variable += 1;
}

setInterval(ActualizarVariable, 1000);


console.log('inicializando bind');
server.bind(4123);
console.log('bind inicializado');
