var express = require("express");
console.log("start server")
var app = express();
app.listen(3080, () => {
 console.log("Server running on port 3000");
});
app.get("/ping", (req, res, next) => {
    res.json({status:"pong"});
});