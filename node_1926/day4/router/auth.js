const express = require('express');

const crypto = require('crypto');

var jwt = require('jsonwebtoken');



const {registerUser, getUserByUserName} = require('../db');


// 返回一个路由 对象, 其实相当于 一个小型的 app, 其实也是一个 中间件
const authRouter = express.Router()

authRouter.post('/login', async function(request, response) {
    const {username, password} = request.body;

    const user = await getUserByUserName(username);
    console.log(user);

    // 使用 md5 加密算法 进行数据的加密
    const hash = crypto.createHash('md5');
    // 将原始字符串传入
    hash.update(password);
    // hash.digest('hex')  返回 加过密字符串
    if (user.password === hash.digest('hex')) {

        let secret = 'shhhhh';
        // 登录成功, 生成 token 通过 jwt.sign 方法
        var token = jwt.sign({_id: user._id, username: user.name }, secret);

        response.cookie('token', token);

        response.send({
            code: 100,
            msg: '登录成功',
            user: {
                _id: user._id,
                username: user.username,
            }
        })
    } else {
        response.send({
            code: 105,
            msg: '登录失败'
        })
    }
});

authRouter.post('/register', async function(request, response) {

    const { username, password } = request.body;
    const hash = crypto.createHash('md5');
    hash.update(password);

    const user = await registerUser({ username, password: hash.digest('hex') })
    console.log(user)
    response.send({
        code: 100,
        msg: '注册成功',
        user: user
    })
});

authRouter.post('/findpwd', function(request, response) {
    response.send({
        msg: '已经发送到邮箱了'
    })
})

module.exports = authRouter