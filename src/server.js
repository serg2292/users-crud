const http = require('http');
const usersRoutes = require('./users/routes/usersRoutes');

function server() {
    const PORT = 3000;
    const ADDRESS = '127.0.0.1';
    const server = http.createServer(async (req, res) => {
        const url = req.url
        if (url.startsWith('/users')) {
            usersRoutes(req, res)
        }
    });

    server.listen(PORT, ADDRESS, () => {
        console.log(`Listening on ${ADDRESS}:${PORT}`);
    });
}

module.exports = server