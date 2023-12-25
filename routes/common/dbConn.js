const mongoDB = require('mongodb')
async function getDBConn() {
    const url = "mongodb+srv://u1:p1@8am.potovsz.mongodb.net/";
    const mongoClient = mongoDB.MongoClient;
    const server = await mongoClient.connect(url)
    const db = server.db("8amdb")
    return db;
}
module.exports = getDBConn;