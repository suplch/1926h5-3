const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
// 引入 cookie解析器 中间件
const cookieParser = require('cookie-parser');

const myBodyParser = require('./myBodyParser');


const app = express();

// 使用 静态资源中间件, 加载 前端的精通网页
app.use(express.static(path.join(__dirname, 'haha')))

// json 中间件 解析器
//app.use( bodyParser.json() );

// 如何写一个自定义 的bodyparser 中间件
app.use( myBodyParser.json() );

// cookie 中间件 解析器
app.use( cookieParser() )

// 定义了一个 服务, 路径为 /userinfo,  
// 当浏览器发起 ajax get 请求 访问 /userinfo 路径的时候, 调用后面的回调函数
app.get('/userinfo', function(request, response) {
    response.send({
        name: '张三',
        age: 18
    })
})
// 定义了一个 服务, 路径为 /login, 
app.post('/login', function(request, response) {

    console.log(request.body);

    const { username, password } = request.body;

    if (username === 'zhang' && password === '123') {

        let token = 'qf student 1001';

        response.cookie('token', token)
        response.send({
            code: 100,
            msg: '登录成功'
        })
    } else {
        response.send({
            code: 111,
            msg: '登录失败'
        })
    }

    

})


app.listen(3000, function(err) {
    if (err) {
        console.log('服务启动失败', err)
        return;
    }
    console.log('服务启动成功 http://localhost:3000');
})