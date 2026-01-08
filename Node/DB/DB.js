const express = require('express');
const app = express();
const fs = require("fs");
const port = 3003

app.use(express.json())

const FILE_NAME = 

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () =>{ 
    console.log(`Example app listening at http://localhost:{port}`)
});