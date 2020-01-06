const fs = require('fs');

const rs = fs.createReadStream('../../project/assets/自由飞翔.mp4');

const ws = fs.createWriteStream('./zyfx.mp4');
/*
let total = 0;
rs.on('data', function(chunk) {

    console.log('收到数据了', chunk.length);
    total += chunk.length;
    ws.write(chunk);
})

rs.on('end', function() {
    console.log('完毕')
    ws.close();
    console.log(total)
})
*/
rs.pipe(ws);