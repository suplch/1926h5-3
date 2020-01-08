
// 获取第三方模块  express
const express = require('express');
const path = require('path');
// 调用 express 函数, 产生一个App 实例
const app = express();
//  public 文件夹的绝对路径
const publicPath = path.join(__dirname, 'public')

// 创建一个静态文件 访问的中间件 express 对象上 有一个 static 方法
const publicMiddleware = express.static(publicPath)
// app 实例有一个方法叫 use, 用来使用某个 中间件,  使用这个 中间件
app.use(publicMiddleware)

// 定义了一个 get 请求服务 请求路径  /userinfo
app.get('/userinfo', function(request, response) {
    //response.send("Hello 我的第一个 get 服务接口")
    response.send({
        code: 100,
        msg: 'ok',
        user: {
            name: '张三',
            age: 18
        }
    })
})


// 定义了一个 post 请求服务 请求路径  /register
app.post('/register', function(request, response) {
    response.send({
        code: 100,
        msg: '注册成功'
    });
})


const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`http://localhost:${port}`)
});