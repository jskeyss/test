console.log('hola carola como va todo');

const http = require('http');
const net = require('net');

function function1() {
    let server = net.createServer(function(socket){
			socket.write('holiwis');
			socket.on('data',function(data){
				socket.write(data);
			});
	});

	server.listen(9000);
}



let server = http.createServer(function(req,res){
    res.write('<h1> hola carola 5</h1>');
	res.end();
});

setTimeout(function1, 2);
server.listen(8101);