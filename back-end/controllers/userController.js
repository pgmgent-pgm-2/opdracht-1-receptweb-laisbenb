const fsp = require('fs/promises');
const path = require('path');

async function getContentFromFile(filePath) {
    const data = await fsp.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

async function getUsers(request, response) {
    const usersPath = path.join(__dirname, "..", "data", "users.json");
    const users = await getContentFromFile(usersPath);
    response.json(users);
};

function addUser(request, response) {
    response.json({
        'message': 'Nieuwe user gepost!'
    });
};

module.exports = {
    getUsers,
    addUser
};