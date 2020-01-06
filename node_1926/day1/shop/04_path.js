const path = require('path');

// path.resolve()  将一个相对路径 解析为绝对路径
const currentPath = path.resolve('.');
const currentPath2 = path.resolve('../..');

console.log(currentPath);
console.log(currentPath2);

// path.join 将多个路径连接起来
const p1 = path.join('a', 'b', 'c', '..');
const p2 = path.join(__dirname, '..', 'lib')


console.log(p1)
console.log(p2)

const ext = path.extname(__filename)

console.log(ext)