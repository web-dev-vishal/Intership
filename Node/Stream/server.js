const fs = require("fs");

// create read stream
const readStream = fs.createReadStream("bigFile.txt", {
  encoding: "utf-8",
});

// create write stream
const writeStream = fs.createWriteStream("copybigFile.txt");

// pipe read stream to write stream
readStream.pipe(writeStream);

// when writing is finished
writeStream.on("finish", () => {
  console.log("File copied successfully using stream");
});

// reading data chunk by chunk
readStream.on("data", (chunk) => {
  console.log("Reading small data chunk:");
  console.log(chunk);
});

// error handling (VERY IMPORTANT)
readStream.on("error", (err) => {
  console.error("Error while reading file:", err);
});

writeStream.on("error", (err) => {
  console.error("Error while writing file:", err);
});
