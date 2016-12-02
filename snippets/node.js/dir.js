var http = require("http");
const fs = require('fs');
const path = '/myPathd';

http.createServer(function (request, response) {
    var responseFiles = [];

    if (request.url === '/getDir') {
        var files = fs.readdirSync(myPath);

        for (var i in files) {
            if (fs.statSync(pathToWars + files[i]).isFile()) {
                responseFiles.push(files[i]);
            }
        }

        responseFiles.sort();
    }

    response.writeHead(200, {'Content-Type': 'application/json '});
    response.end(JSON.stringify(responseFiles));
}).listen(8081);