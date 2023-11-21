const mongoDB = require("mongodb")
async function getDBConnection(){
    const url ="mongodb+srv://u1:p1@uidev.qppauv5.mongodb.net/";
     const mongoClient=mongoDB.MongoClient;
    const server= await mongoClient.connect(url)
    const db = server.db("devdb")
    return db;
}

module.exports=getDBConnection;