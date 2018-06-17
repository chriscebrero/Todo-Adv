var express = require("express"),
    app = express()
    
app.get('/', function(req, res){
    res.send("Hi from Express")
});
    
app.listen(process.env.PORT, function(){
    console.log("APP is running on port " + process.env.PORT);
});