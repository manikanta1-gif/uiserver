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






module.exports= router;