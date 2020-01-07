const fs = require('fs');
const path = require('path');
function walkDir(ph, space) {
    const list = fs.readdirSync(ph);
    for (let li of list) {
        console.log(' '.repeat(space * 4), li)
        const pathstr =  path.join(ph, li);
        const stat = fs.statSync(pathstr);
        if (stat.isDirectory()) {
            walkDir(pathstr, space + 1)
        }
    }
}
walkDir('.', 0)