const net = require('net');

console.log('hola carola como va todo 2');



let server = net.createServer(function(socket){
	socket.write('Echo server\r\n');
	socket.on('data',function(data){
		socket.write(data);
	});
});


server.listen(3001);
