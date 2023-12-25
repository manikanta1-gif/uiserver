var userDAO = require('../dao/userDAO')
var jwt = require('jsonwebtoken')
async function saveUserService(data) {
    const result = await userDAO.saveUserDAO(data);
    return result;
}

async function getUserService() {
    const result = await userDAO.getUserDAO();
    result.forEach((obj) => {
        delete obj.pwd
    })
    return result;
}

async function authService(data) {
    const result = await userDAO.authDAO(data);
    if (result.length) {
        const token = jwt.sign(data, "my-token")
        result[0].token = token
    }
    return result;
}
async function updateUserService(id, data) {
    const result = await userDAO.updateUserDao(id, data);
    return result;
}
async function deleteUserService(id) {
    const result = await userDAO.deleteUserDao(id);

    return result;
}

module.exports = {
    saveUserService,
    getUserService,
    authService,
    updateUserService,
    deleteUserService
}