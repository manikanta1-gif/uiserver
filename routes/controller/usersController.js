var express= require("express")
var router= express.Router();
var usersService= require("../service/usersService");

router.post("/save-user", async function(req,res,next){
    const data= req.body.data;
     const result= await usersService.saveUserService(data);
     res.send(result);
})
router.get("/get-user", async function(req,res,next){
   const result = await usersService.getUserService();
   res.send(result);
})
router.post("/login", async function(req, res, next){
   const data = req.body.data;
 const result= await usersService.authService(data);
 res.send(result);
})
router.put("/update-user", async function(req, res, next){
   const id = req.query.id;
   const data = req.body.data;
   const result = await usersService.updateUserService(id, data)
   res.send(result)

})
router.delete("/delete-user/:id", async function(req, res, next){
   const id = req.params.id;
   const result = await usersService.deleteUserService(id)
   res.send(result)

})





module.exports= router;