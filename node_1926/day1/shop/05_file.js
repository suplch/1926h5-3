const fs = require('fs');
// 检查一个路径是否存在
const exist = fs.existsSync('/a/b');
const exist2 = fs.existsSync(__dirname);

console.log(exist)
console.log(exist2)

fs.readFile('./hello.txt', 'utf8', function(error, data) {
    if (error) {
        console.log('做一些错误处理.... ', error)
        return;
    }
    console.log('data is', data);
    //console.log('data is', data.toString('utf8'));
    
})