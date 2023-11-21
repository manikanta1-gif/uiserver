var express = require('express');
var router = express.Router();

router.get("/get-std", function(req,res,next){
  res.send('Hello.. this is s1 my marks are 400');

})

//url: http://localhost:2020/std/get-std
//req.method: get()

router.get("/get-std-query", function(req,res,next){
    const name=req.query.name;
    const marks=req.query.marks;
res.send(`Hello.. this is ${name} my marks are ${marks}`);
})
//url: http://localhost:2020/std/get-std-query
//req.method: get()
router.get("/get-std-path/:name/:marks", function(req,res,next){
    const name=req.params.name;
    const marks=req.params.marks;
res.send(`Hello.. this is ${name} my marks are ${marks}`);
})
//url: http://localhost:2020/std/get-std-path
//req.method: get()
router.put("/get-std-headers", function(req,res,next){
  const name=req.headers.name;
  const marks=req.headers.marks;
res.send(`Hello.. this is ${name} my marks are ${marks}`);
})
router.put("/get-std-body", function(req,res,next){
  const name=req.body.name;
  const marks=req.body.marks;
res.send(`Hello.. this is ${name} my marks are ${marks}`);
})


module.exports = router;