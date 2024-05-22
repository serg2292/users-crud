const createUser = require("./createUser");
const deleteUser = require("./deleteUser");
const getAllUsers = require("./getAllUsers");
const getUser = require("./getUser");
const updateUser = require("./updateUser");

const requestHandler = {
    async GET(_, res, match) {
        if (match) {
            await getUser(res, match);
        } else {
            await getAllUsers(res);
        }
    },
    async POST(req, res) {
        await createUser(req, res);
    },
    async PUT(req, res, match) {
        await updateUser(req, res, match);
    },
    async DELETE(req, res, match) {
        await deleteUser(req, res, match);
    },
    async handle404(_, res) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};

async function usersRoutes(req, res) {
    const url = req.url;
    const method = req.method;
    const match = url.match(/^\/users\/(\d+)$/);

    const handler = requestHandler[method];
    if (handler) {
        await handler(req, res, match);
    } else {
        await routesRecord.handle404(req, res);
    }
}


module.exports = usersRoutes