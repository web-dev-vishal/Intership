const path = require("path");
const os = require("os");

console.log("1 Full path of this file");
console.log(__filename);

console.log("2 Directury (folder) of this file");
console.log(__dirname);

console.log("3 File details using path.parse");
console.log(path.parse(__filename));

console.log("4 Only file extension");
console.log(path.extname(__filename));

console.log("5 Operting System Info:")
console.log("OS Platfrom", os.platform());
console.log("OS Type:", os.type());
console.log("Free Memory", os.freemem());
console.log("Total Memory", os.totalmem());
console.log("Home Directory", os.homedir());
