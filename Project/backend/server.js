const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();

// Importing routes 
const companyRoutes = require("./routes/companyRoutes.js"); 

const port = process.env.PORT ;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.use("/api/company", companyRoutes);

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});
