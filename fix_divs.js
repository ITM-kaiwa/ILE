
const fs = require("fs");
let file = "components/Navbar.tsx";
let content = fs.readFileSync(file, "utf8");

content = content.replace("className={`flex items-center gap-2\">", "className=\"flex items-center gap-2\">");
content = content.replace("className={`flex items-center gap-2 ml-0 sm:ml-2\">", "className=\"flex items-center gap-2 ml-0 sm:ml-2\">");

fs.writeFileSync(file, content, "utf8");
console.log("Fixed all broken divs!");

