const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end('Hello World');
});

server.listen(3000);
console.log('Adresse du serveur: http://localhost:3000');