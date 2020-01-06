const fs = require('fs');


/*
fs.readFile(process.argv[2], function(err, data) {

    if (err) {
        console.log(err);
        console.log('文件复制 读取失败')
        return;
    }

    fs.writeFile(process.argv[3], data, function(err) {
        if (err) {
            console.log(err);
            console.log('文件复制 写入失败')
            return;
        }
        console.log('文件复制成功')
    })

})
*/


fs.writeFileSync(process.argv[3], fs.readFileSync(process.argv[2]))