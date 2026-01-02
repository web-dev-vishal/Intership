const http = require("http");

const myServer = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to home Page");
        res.end();
    } 
    else if (req.url === "/about") {
        res.write("Welcome to about Page");
        res.end();
    } 
     else {
        res.write(" 404 - Page Not Found");
        res.end();
    }
})

myServer.listen(3000,  ()=> {
    console.log("Server running on http://localhost:8080");

0})
