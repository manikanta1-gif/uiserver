const mongoDB=require('mongodb')
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
  
  module.exports= {
      saveUserDAO,
      getUserDAO
  
  }