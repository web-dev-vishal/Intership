const express = require('express')
const app = express()
const PORT = 8060

app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.get('/student', (req, res) => {
    res.json({
        name: "Aryan",
        course: "MBBS",
        Year: 4,
        success: true
    })
});

app.post("/login", (req,res)=> {
    res.send("Login API")
})

app.listen(PORT, () => {
    console.log(` Server is listening at http://localhost:8060`)
})