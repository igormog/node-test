var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('<h1>Hello Node.js</h1>');
});

server.listen(process.env.PORT || 3000);