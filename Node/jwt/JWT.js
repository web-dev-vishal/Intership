const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
const PORT = 4005;

dotenv.config();
app.use(express.json());

const JWT_SECRET = process.env.JWT;


app.post("/login", (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({
            message: "Username required",
        });
    }

    const token = jwt.sign(
        { username },
        JWT_SECRET,
        { expiresIn: "1m" }
    );

    res.json({ token });
});


const verifyToken = (req, res, next) => {
    const token = req.header("auth");

    if (!token) {
        return res.status(403).json({ message: "Please add token" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};


app.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Welcome " + req.user.username,
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
