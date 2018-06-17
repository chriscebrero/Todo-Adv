var express = require("express"),
    app = express()
    
var todoRoutes = require('./routes/todos')    
    
app.get('/', function(req, res){
    res.send("hello from root route")
});

app.use('/api/todos', todoRoutes);
    
app.listen(process.env.PORT, function(){
    console.log("APP is running on port " + process.env.PORT);
});
