const fs = require("fs");

//  Write file
fs.writeFile("student.txt", "This is student file", (err) => {
  if (err) {
    console.log("Error in file", err);
    return;
  }
  console.log("File created successfully");

  //  Read file (after file is created)
  fs.readFile("student.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error while reading file", err);
      return;
    }
    console.log("Reading file content:");
    console.log(data);

    // Append file (after reading)
    fs.appendFile("student.txt", "\nNew data added", (err) => {
      if (err) {
        console.log("Error in appending file", err);
        return;
      }
      console.log("File appended successfully");
    });
  });
});