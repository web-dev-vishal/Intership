const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const dotenv = require("dotenv")
const PORT = 4005 

require.dotenv();
app.use(express.json())

const jwt = process.env.JWT

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:{PORT}`)
}); 