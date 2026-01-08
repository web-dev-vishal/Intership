const express = require('express');
const app = express();
const fs = require("fs");
const port = 3003

app.use(express.json())

const FILE_NAME = 'students.json';

const readData = () => {
if (!fs.existsSync (FILE_NAME)) return [];
const data = fs.readFileSync (FILE_NAME);
return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(data, null, 2));
}

app.get('/students', (req, res) => {
    const students = readData();
    res.send(students);
})

app.post('/students', (res,req) => {
    const students = readData();

    const newStudent = {
        id: students.lenght + 1,
        name: req.body.name,
        course: req.body.course
    };
    
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () =>{ 
    console.log(`Example app listening at http://localhost:{port}`)
});