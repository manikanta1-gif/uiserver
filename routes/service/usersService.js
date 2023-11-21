var usersDAO= require('../dao/usersDAO')
async function saveUserService(data ){
  const result= await usersDAO.saveUserDAO(data);
  return result;
  

}
async function getUserService(){
 const result = await usersDAO.getUserDAO();
 return result;

}

module.exports= {
    saveUserService,
    getUserService

}