const express = require('express');
const app = express();
const port = 10000;

app.get('/error', (req, res) => {
    res.send('Something Went Wrong ❌')
});

app.use((err, req, res , next) => {
    res.status(500).json({
        message: err.message
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:10000`)
});