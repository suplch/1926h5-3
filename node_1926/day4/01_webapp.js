const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const path = require('path');

const auth = require('./router/auth');
const goods = require('./router/goods');

var jwt = require('jsonwebtoken');
// secret 是一个钥匙 字符串
let secret = 'shhhhh';

const app = express();
// haha 目录的绝对路径
const hahaPath = path.join(__dirname, 'haha')
// 静态资源中间件
const hahaMiddleware = express.static(hahaPath)

app.use('/', hahaMiddleware)
// 使用 auth 中间件, 当浏览器 请求 地址以  /auth 打头时候 执行 auth 中间件
app.use(cookieParser());
app.use(bodyParser.json())

const whiteList = [
    '/auth/login',
    '/auth/register'
]

app.use(function(request, response, next) {
    
    if (whiteList.indexOf(request.url) !== -1) {
        next();
    } else {
        // jwt.verify 校验 token 是否有效
        jwt.verify(request.cookies.token, secret, async function(err, user) {
            if (err) {
                response.send({
                    code: 109,
                    msg: 'token 校验失效, 请重新登录'
                })
            } else {
                next();
            }
        });
    }

});

app.use('/auth', auth);
// 使用 goods 中间件, 当浏览器 请求 地址以  /goods 打头时候 执行 auth 中间件
app.use('/goods', goods)

const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('http://localhost:' + port);
});