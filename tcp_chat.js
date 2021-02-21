console.log('inicializando');

const net = require('net');

let listaSockets = {};
let id = 0;


let server = net.createServer(function(socket){
	id++;
	let nuevoID = 'coneccion' + id;
	listaSockets[nuevoID] = socket;
	console.log('nueva coneccion de ' + socket.remoteAddress );

	socket.on('data',function(data){
		console.log('nuevo mensaje de ' + socket.remoteAddress);

		for (var id in listaSockets) {
			listaSockets[id].write(data);
		}

		
	});

	socket.on('error', function(err) {
		console.log('se salio el cliente ' + socket.remoteAddress)
		delete listaSockets[nuevoID];
	});
});

server.listen(9500);
