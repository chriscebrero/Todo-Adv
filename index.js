var express = require("express"),
    app = express()
    
app.listen(process.env.PORT, function(){
    console.log("APP is running on port " + process.env.PORT);
});