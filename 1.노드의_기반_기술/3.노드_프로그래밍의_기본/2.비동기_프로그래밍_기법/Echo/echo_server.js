var net = require('net');
var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		socket.write(data);
		console.log(data.toString());
	});
});
server.listen(8888);