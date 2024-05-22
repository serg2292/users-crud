const http = require('http');
const { createUsersTable } = require('./users/database/usersDB');
const usersRoutes = require('./users/routes/usersRoutes');

const PORT = 3000;
const ADDRESS = '127.0.0.1';

createUsersTable();

const server = http.createServer(async (req, res) => {
    const url = req.url
    if (url.startsWith('/users')) {
        usersRoutes(req, res)
    }
});

server.listen(PORT, ADDRESS, () => {
    console.log(`Listening on ${ADDRESS}:${PORT}`);
});
