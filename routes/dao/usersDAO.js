const mongoDB=require('mongodb')
const ObjectId= mongoDB.ObjectId
const getDBConnection= require('../common/dbConnection')
async function saveUserDAO(data ){
    try{
     const db = await getDBConnection()   
     const collection= db.collection("users")
     const result= await collection.insertOne(data)
     return result;
    }
    catch(e){
            console.error("saveUserDAO",e)
    }
  }
  async function getUserDAO(){
    const db = await getDBConnection();
    const collection = db.collection("users");
    const result = await  collection.find({}).toArray();
    result.forEach((obj)=>{
        delete obj.password;

    })
        
    
    return result;
  }
  async function authDAO(data){
    const db= await getDBConnection()
   const collection= db.collection("users")
  const result = await collection.find(data).toArray()
  return result;
  }
async function updateUserDAO(id, data){
 const db = await getDBConnection()
 const  collection = db.collection("users")
 const result = await collection.updateOne({ _id: new ObjectId(id)}, {$set: data} )
 return result;
 }
 async function deleteUserDAO(id){
  const db = await getDBConnection()
  const  collection = db.collection("users")
  const result = await collection.deleteOne({ _id: new ObjectId(id)})
  return result;
  }

module.exports = {
      saveUserDAO,
      getUserDAO,
      authDAO,
      updateUserDAO,
      deleteUserDAO
  
  }