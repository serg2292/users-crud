const usersData = require("../data-access/usersData");

async function updateUser(req, res, match) {
    const userId = match[1];
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', async () => {
        try {
            const userData = { ...JSON.parse(body), id: userId };
            const result = await usersData.updateUser(userData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
    });
}

module.exports = updateUser