const express = require("express");
const bodyParser = require("body-parser");

const path = require("path"); 

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); 

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html')); 
}); 

app.listen(3000, function(){
    console.log("Server Initiated");
});