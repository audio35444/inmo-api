var express = require("express");
console.log("start server")
var app = express();
app.listen( () => {
 console.log("Server running on port 80 or 8080");
});
app.get("/ping", (req, res, next) => {
    res.json({status:"pong"});
});