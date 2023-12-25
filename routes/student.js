var express = require('express')
var router = express.Router()

router.get("/get-std", function (req, res, next) {
    res.send("Hello....this is s1 my marks are 500.")
})

router.get("/get-std-query", function (req, res, next) {
    const n = req.query.name;
    const marks = req.query.marks;
    res.send(`Hello....this is ${n} my marks are ${marks}.`)
})

router.get("/get-std-path/:name/:marks", function (req, res, next) {
    const n = req.params.name;
    const marks = req.params.marks;
    res.send(`Hello....this is ${n} my marks are ${marks}.`)
})

router.get("/get-std-headers", function (req, res, next) {
    const n = req.headers.name;
    const marks = req.headers.marks;
    res.send(`Hello....this is ${n} my marks are ${marks}.`)
})

router.post("/get-std-body", function (req, res, next) {
    const n = req.body.name;
    const marks = req.body.marks;
    res.send(`Hello....this is ${n} my marks are ${marks}.`)
})
// url  - http://localhost:2020/std/get-std 
// req mehtod- get


module.exports = router;



