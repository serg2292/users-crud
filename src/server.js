const http = require('node:http')
const createServer = http.createServer


const server = createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Get user!\n')
    } else if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Post user!\n')
    } else {
        res.statusCode = 404;
        res.end()
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000')
})