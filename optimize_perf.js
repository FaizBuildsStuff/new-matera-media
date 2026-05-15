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
            
            // 1. Reduce massive blur radii. Blurs over 60px are exponentially more expensive.
            // We can get the same "glowing" look by reducing the blur and letting the radial-gradient do the heavy lifting.
            content = content.replace(/filter:\s*"blur\((\d+)px\)"/g, (match, p1) => {
                const blur = parseInt(p1);
                if (blur > 60) {
                    return `filter: "blur(50px)"`; // 50px is much more performant than 180px
                }
                return match;
            });

            // 2. Add pointer-events-none to everything animated in the background if it doesn't have it
            // (Already did this for wrappers, but checking inner orbs too)
            
            if (content !== initialContent) {
                console.log(`Optimized performance in ${fullPath}`);
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

processDir(path.join(__dirname, 'components'));
console.log('Done optimizing blurs');
