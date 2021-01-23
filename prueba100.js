const net = require('net');

console.log('hola carola como va todo');



let server = net.createServer(function(socket){
	socket.write('Echo server\r\n');
	socket.on('data',function(data){
		socket.write(data);
	});
});


server.listen(8101);