console.log('inicializando');


const dgram = require("dgram");

var server = dgram.createSocket("udp4");

let listaClientes = {};


function CrearCliente(info){
	let nuevoID = "con" + info.address + info.port;

    let nuevoCl = {};
    nuevoCl.direccion = info.address;
    nuevoCl.puerto = info.port;

    nuevoCl.vida = 100;

	listaClientes[nuevoID] = nuevoCl;
	console.log('nueva cliente ' + nuevoID );
}



server.on("message", function (msg, rinfo) {
	 
    let clienteExistente = listaClientes[  "con" + rinfo.address + rinfo.port ];
    if(clienteExistente){
        clienteExistente.vida = 100;
    }else{
        CrearCliente(rinfo);
    }

    for (var id in listaClientes) {
        server.send(msg, listaClientes[id].puerto, listaClientes[id].direccion  );  
    }

});




function Actualizar(){

    for (var id in listaClientes) {
       let cliente = listaClientes[id];
       cliente.vida--;
       
       if(cliente.vida <= 0){
            delete listaClientes[id];
            console.log('desaparecio cliente ' + id );
       }
    }


}

setInterval(Actualizar, 30);


console.log('inicializando bind');
server.bind(3005);
console.log('bind inicializado');
