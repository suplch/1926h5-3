var jwt = require('jsonwebtoken');
// secret 是一个钥匙 字符串
let secret = 'shhhhh';

var token = jwt.sign({ username: 'zhangsan' }, secret);

console.log(token);


const user = jwt.verify(token, secret);

console.log(user);