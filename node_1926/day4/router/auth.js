const express = require('express');

// 返回一个路由 对象, 其实相当于 一个小型的 app, 其实也是一个 中间件
const authRouter = express.Router()

authRouter.post('/login', function(request, response) {
    response.send({
        msg: '登录成功'
    })
});

authRouter.post('/register', function(request, response) {
    response.send({
        msg: '注册成功'
    })
});

authRouter.post('/findpwd', function(request, response) {
    response.send({
        msg: '已经发送到邮箱了'
    })
})

module.exports = authRouter