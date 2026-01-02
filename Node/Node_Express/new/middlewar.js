const express = require('express')
const app = express()
const port = 7000

app.use(express.json())
app.use(securityCheck);

app.get('/', (req, res) => {
    res.send('Middleware Check done ✅')
})

const securityCheck = (req,res,next) => {
    console.log("Security Check done ✅")
    next();
}

app.listen(port, () => console.log(`Example app listening at http://localhost:7000`))