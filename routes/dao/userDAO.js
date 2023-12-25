const mongoDB = require('mongodb')
const ObjectId = mongoDB.ObjectId;
const getDBConn = require('../common/dbConn')
async function saveUserDAO(data) {
    try {
        const db = await getDBConn();
        const collection = db.collection("users")
        const result = await collection.insertOne(data)
        return result;
    } catch (e) {
        console.error("saveUserDAO", e);
    }
}

async function getUserDAO() {
    const db = await getDBConn();
    const collection = db.collection('users')
    const result = await collection.find({}).toArray();
    return result;
}

async function authDAO(data) {
    const db = await getDBConn();
    const collection = db.collection("users");
    const result = await collection.find(data).toArray();
    return result;
}
async function updateUserDao(id, data) {
    const db = await getDBConn();
    const collection = db.collection("users");
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
    return result;
}

async function deleteUserDao(id) {
    const db = await getDBConn();
    const collection = db.collection("users");
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result;
}


module.exports = {
    saveUserDAO,
    getUserDAO,
    authDAO,
    updateUserDao,
    deleteUserDao
}