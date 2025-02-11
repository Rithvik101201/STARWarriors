const express = require("express");
const bodyParser = require("body-parser");

const path = require("path"); 

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); 

app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, '../public/index.html')); 
}); 

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
