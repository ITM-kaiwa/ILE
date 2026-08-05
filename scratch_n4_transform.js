
const fs = require('fs');

let content = fs.readFileSync('c:/Users/Admin/.gemini/antigravity/Synth/data/grammar-n4-cards.ts', 'utf8');

// Use regex to parse out individual blocks or just do a string replacement loop
// Because it's TS, it's exported as an array of objects.
// Let's replace the visual content dynamically.

const blocks = content.split('  {
');
let newContent = blocks[0];

for (let i = 1; i < blocks.length; i++) {
    let block = '  {\n' + blocks[i];
    
    // Extract title, structure, meaning
    const titleMatch = block.match(/"title":\s*"([^"]+)"/);
    const structureMatch = block.match(/"structure":\s*"([^"]+)"/);
    const meaningMatch = block.match(/"meaning":\s*"([^"]+)"/);
    
    if (titleMatch && structureMatch && meaningMatch) {
        const title = titleMatch[1];
        const structure = structureMatch[1];
        const meaning = meaningMatch[1];
        
        const newVisual = `### 👁️ 視覚イメージ解説 (${title})\n| 構造 | 助詞・接続 | 意味 |\n|---|---|---|\n| **${structure}** | ハイライト | ${meaning} |\n\n> 💡 VNJPClub公式図解カード`;
        
        // Replace existing "visual": "..."
        // It might span multiple lines if there are \n. But it's usually on one line in JSON string format.
        // Actually, let's just replace the whole "visual": "...", line.
        block = block.replace(/"visual":\s*"[^"]*",/g, `"visual": "${newVisual.replace(/\n/g, '\\n')}",`);
    }
    
    newContent += block;
}

fs.writeFileSync('c:/Users/Admin/.gemini/antigravity/Synth/data/grammar-n4-cards.ts', newContent, 'utf8');
console.log('N4 cards updated with table format.');
