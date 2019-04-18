const http = require('http');
const url = require('url');
const host = process.env.HOST;
const port = process.env.PORT;

function readWorld() {
    return 'world';
};

function createWorld() {
    return 'world created';
};

function updateWorld() {
    return 'world updated';
};

function deleteWorld() {
    return 'world deleted';
};

const handler = {
    'GET' : readWorld(),
    'POST': createWorld(),
    'PUT' : updateWorld(),
    'DELETE': deleteWorld()
};
const server =  http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    const _method = req.method;
    const url = req.url;
    if (url === '/hello'){
        res.write(handler[_method]);
    } else {
      res.write('404 not found');
    }
    res.end();
});
server.listen(port, host, function(err){
	if(!err) console.log('Port: ' + 3000);
});
