var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;

var server = http.createServer(function(req, res) {
	var url = parse(req.url);
	var path = join(root, url.pathname);
	var stream = fs.createReadStream(path);
	/*stream.on('data', function(chunk) {
		res.write(chunk);
	});
	stream.on('end',function() {
		res.end();
	});*/
	stream.pipe(res);//res.end()를 알아서 호출해줌
});
server.listen(3000);