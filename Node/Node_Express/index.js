const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(PORT, () =>{ 
    console.log(` Server is listening at http://localhost:8080`)
})