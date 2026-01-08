const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
const PORT = 4005 

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:{PORT}`)
}); 