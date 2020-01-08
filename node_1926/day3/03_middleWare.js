// 纳入框架
const express = require('express');
// 创建一个 app 实例
const app = express();

// 中间件是什么?  在正在的请求目标 中间 截胡 ,相当于 一个中介
// 中间件 提前进行一些预处理 拦截
app.use('/userinfo', function(request, response, next) {
    console.log('进入中间件111')
    // 注意事项, next 一定要在合适的时候执行
    // response.send 是被 express 框架 包装过的方法
    // 里面其实是 response.write(),  response.end()/
    // 
    /*  伪代码
        response.send = function(arg) {
            if (typeof arg == 'object') {
                let str = JSON.stringify(arg);
                response.write(str);
                response.end();
            }
        }
    */
    response.send({
        name: '李四',
        age: 20
    });

    // next(); // 进入到下一步 

    

    console.log('离开中间件111')
});

app.use('/login', function(request, response, next) {
    console.log('进入中间件222')
    next(); // 进入到下一步
    console.log('离开中间件222')
});


app.get('/userinfo', function(req, res, next) {
    console.log('局部中间件 /userinfo  开始' );
    next();
    console.log('局部中间件 /userinfo 结束');
}, function(request, response) {

    console.log('get 请求开始')
    response.send({
        name: '张三',
        age: 18
    });
    console.log('get 请求结束')
})


// 启动 web app
const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log('启动失败', err)
        return;
    }
    console.log('启动成功, 请访问 http://localhost:' + port)
});