const express = require('express')
const app = express()
const port = 7000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Middleware Check done ✅')
})

const securityCheck = (req,res,next) => {
    console.log("Security Check done ✅")
    next();
}

app.use(securityCheck);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:7000`)
});