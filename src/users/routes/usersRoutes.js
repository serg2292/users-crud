const createUser = require("./createUser");
const deleteUser = require("./deleteUser");
const getAllUsers = require("./getAllUsers");
const getUser = require("./getUser");
const updateUser = require("./updateUser");

async function usersRoutes(req, res) {
    const url = req.url;
    const method = req.method;
    const match = url.match(/^\/users\/(\d+)$/);

    if (method === 'GET' && match) {
        await getUser(res, match)
    }

    if (method === 'GET' && !match) {
        await getAllUsers(req, res)
    }

    if (method === 'POST') {
        await createUser(req, res)
    }

    if (method === 'PUT' && match) {
        await updateUser(req, res, match)
    }

    if (method === 'DELETE' && match) {
        await deleteUser(req, res, match)
    }
    // else {
    //     res.writeHead(404, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({ error: 'Not Found' }));
    // }
}


module.exports = usersRoutes