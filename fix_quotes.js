const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('\"', ''); // Just removing the stray quote
    fs.writeFileSync(filePath, content, 'utf8');
}

// Read the exact files and use regex to remove the stray quote at the end of className
let navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
navbar = navbar.replace('!hasClickedGuide ? \'animate-pulse\' : \'\'}\\"', '!hasClickedGuide ? \'animate-pulse\' : \'\'}\');
fs.writeFileSync('components/Navbar.tsx', navbar, 'utf8');

let saku = fs.readFileSync('components/SakuSenseiChat.tsx', 'utf8');
saku = saku.replace('!hasBeenOpened ? \'animate-pulse\' : \'\'}\\"', '!hasBeenOpened ? \'animate-pulse\' : \'\'}\');
fs.writeFileSync('components/SakuSenseiChat.tsx', saku, 'utf8');

console.log('Fixed quotes in files');
