const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../data/Company.json");

function readData() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

router.get("/", (req, res) => {
    const companies = readData();
    res.json(companies);
});

router.post("/", (req, res) => {
    const companies = readData();

    const newCompany = {
        company: req.body.company,
        status: req.body.status,
    };

    companies.push(newCompany);
    writeData(companies);

    res.json({ message: "Company added successfully" });
});

module.exports = router;
