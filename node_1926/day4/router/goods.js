const express = require('express');

const goodsRouter = express.Router()
// 路由对象 相当于一个小型的 app 
goodsRouter.get('/list', function(request, response) {

    response.send({
        code: 100,
        msg: '商品列表',
        goods_list: [
            { name: '橙子', price: 10, pic: '🍊'},
            { name: '西瓜', price: 10, pic: '🍉'},
            { name: '香蕉', price: 10, pic: '🍌'},
            { name: '菠萝', price: 10, pic: '🍍'},
        ]
    })

})

module.exports = goodsRouter;
