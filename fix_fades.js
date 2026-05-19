const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let initialContent = content;
            
            // Regex to remove TOP SHADOW
            content = content.replace(/\{\/\*\s*TOP SHADOW\s*\*\/\}\s*<div[^>]*className="[^"]*absolute top-0 left-0[^"]*"[^>]*style=\{\{[\s\S]*?\}\}\s*\/>/gi, '');
            // Regex to remove BOTTOM BLEND
            content = content.replace(/\{\/\*\s*BOTTOM BLEND\s*\*\/\}\s*<div[^>]*className="[^"]*absolute bottom-0 left-0[^"]*"[^>]*style=\{\{[\s\S]*?\}\}\s*\/>/gi, '');
            // Regex to remove TOP FADE
            content = content.replace(/\{\/\*\s*TOP FADE\s*\*\/\}\s*<div[^>]*className="[^"]*absolute top-0 left-0[^"]*"[^>]*style=\{\{[\s\S]*?\}\}\s*\/>/gi, '');
            // Regex to remove BOTTOM FADE
            content = content.replace(/\{\/\*\s*BOTTOM FADE\s*\*\/\}\s*<div[^>]*className="[^"]*absolute bottom-0 left-0[^"]*"[^>]*style=\{\{[\s\S]*?\}\}\s*\/>/gi, '');

            if (content !== initialContent) {
                console.log(`Updated borders in ${fullPath}`);
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

processDir(path.join(__dirname, 'components'));
console.log('Done fixing fades and shadows');
