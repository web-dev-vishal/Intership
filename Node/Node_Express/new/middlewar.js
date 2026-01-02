const express = require('express')
const app = express()
const port = 7000

app.use(express.json())


const securityCheck = (req,res,next) => {
    console.log("Security Check done ✅")
    next();
}

app.get('/', (req, res) => {
    res.send('Middleware Check done ✅')
})

app.use(securityCheck);

app.listen(port, () => {
    console.log(`Serever is listening at http://localhost:7000`)
});