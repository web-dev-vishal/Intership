const fs = require("fs");

const readStream = fs.createReadStream("bigFile.txt");

const writeStream = fs.createWriteStream("copybigFile.txt");

readStream.pipe(writeStream);  

writeStream.on("finish", () => {
    console.log("File copy using strean");
})

readStream.on("data", (chunk) => {
    console.log("Reading a smaall data chunk by chunk");
    console.log(chunk.toString());
});