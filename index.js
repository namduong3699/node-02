let http = require("http");
let functionHandler = require('./handler');

let handler = {
    'GET' : functionHandler.GET(),
    'POST': functionHandler.POST(),
    'PUT' : functionHandler.PUT(),
    'DELETE': functionHandler.DELETE()
};

let server =  http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    let url = req.url;
    let _method = req.method;
    if (url==='/hello'){
        res.write(handler[_method]);
    }
    res.end();
});

server.listen(3000, function () {
    console.log('server start at port 3000');
});
