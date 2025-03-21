const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const folderPath = path.join(__dirname,'public')

app.use(express.static(folderPath))

app.get('/', (req,res)=>{
    res.sendFile(path.join(folderPath/'index.html'))
})

app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server is running at http://localhost:${PORT}`)
})
