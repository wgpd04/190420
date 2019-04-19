var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );


app.use( express.static( "public" ) );

app.listen(process.env.PORT);
console.log(process.env.PORT);
console.log("Server is running... Press 'Stop' button to exit.");

app.get("/", function (request, response) {
    response.send(__dirname);
    // var module = require("./controller/home.js");
    // var obj = new module();
    // obj.index(request, response);
})


app.get("/api/testQuery", function (request, response) {
    response.send(request.query.id);
})

app.post("/api/testPost", function (request, response) {
    if (request.body.userName) {
        response.send(request.body);
    }
    else
        response.send("userName wrong");
})



app.get("/:controllerName/:actionName", function (request, response) {
    var module = require(
        "./controller/" 
      + request.params.controllerName 
      + ".js");
    var obj = new module();
    obj[request.params.actionName](request, response);
})

app.post("/:controllerName/:actionName", function (request, response) {
    var module = require(
        "./controller/" 
      + request.params.controllerName 
      + ".js");
    var obj = new module();
    obj[request.params.actionName](request, response);
})