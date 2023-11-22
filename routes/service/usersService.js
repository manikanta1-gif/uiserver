var usersDAO= require('../dao/usersDAO')
async function saveUserService(data ){
  const result= await usersDAO.saveUserDAO(data);
  return result;
  

}
async function getUserService(){
 const result = await usersDAO.getUserDAO();
 return result;

}
async function authService(data){
const result = await usersDAO.authDAO(data);
return result;

}
async function updateUserService(id, data){
 const result = await usersDAO.updateUserDAO(id, data);
 return result;

}
async function deleteUserService(id){
  const result = await usersDAO.deleteUserDAO(id);
  return result;
 
 }
module.exports= {
    saveUserService,
    getUserService,
    authService,
    updateUserService,
    deleteUserService

}