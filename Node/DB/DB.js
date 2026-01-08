const express = require("express");
const fs = require("fs");

const app = express();
const port = 3003;

app.use(express.json());

const FILE_NAME = "students.json";

const readData = () => {
    if (!fs.existsSync(FILE_NAME)) return [];
    const data = fs.readFileSync(FILE_NAME, "utf-8");
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(data, null, 2));
};

app.get("/students", (req, res) => {
    const students = readData();
    res.json(students);
});

app.post("/students", (req, res) => {
    const students = readData();

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
    };

    students.push(newStudent);
    writeData(students);

    res.json({
        message: "Student saved to JSON file",
        student: newStudent,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});