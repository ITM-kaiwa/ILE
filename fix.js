
const fs = require("fs");
function fix(file, oldStr, newStr) {
  let text = fs.readFileSync(file, "utf8");
  text = text.replace(oldStr, newStr);
  fs.writeFileSync(file, text, "utf8");
}
fix("components/Navbar.tsx", "border-indigo-300 ${!hasClickedGuide ? `animate-pulse` : ``}`\"", "border-indigo-300 ${!hasClickedGuide ? `animate-pulse` : ``}`");
fix("components/SakuSenseiChat.tsx", "bg-white ${!hasBeenOpened ? `animate-pulse` : ``}`\"", "bg-white ${!hasBeenOpened ? `animate-pulse` : ``}`");
console.log("Fixed!");

