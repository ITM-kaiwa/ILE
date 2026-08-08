
const fs = require("fs");
let file = "components/Navbar.tsx";
let content = fs.readFileSync(file, "utf8");
content = content.replace("className={`flex items-center space-x-2 mr-1 sm:mr-3\">", "className=\"flex items-center space-x-2 mr-1 sm:mr-3\">");
fs.writeFileSync(file, content, "utf8");
console.log("Fixed!");

