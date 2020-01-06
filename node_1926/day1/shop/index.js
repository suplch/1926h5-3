// require 函数去获取 其他文件导出的 对象
let obj = require('./cal.js')

let c = obj.add(5, 6, 10)

console.log(c);

console.log(obj.sub(7, 2));
