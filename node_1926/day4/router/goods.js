const express = require('express');



const {findGoods, delGoods, createGoods} = require('../db');

// 
const goodsRouter = express.Router()
// 路由对象 相当于一个小型的 app 
goodsRouter.get('/list', async function(request, response) {
    let goods_list = await findGoods();
    response.send({
        code: 100,
        msg: '商品列表',
        goods_list
    })
})

goodsRouter.post('/del', async function(request, response) {
    const { goods_id } = request.body
    console.log(goods_id)
    try {
        const result = await delGoods(goods_id)
        response.send({
            code: 100,
            msg: 'ok',
            res: result
        })
    } catch (err) {
        console.log(err);
        response.send({
            code: 101,
            msg: err.message
        })
    }
})

goodsRouter.post('/add', async function(request, response) {
    const {name, price, desc, pic} = request.body
    try {
        const result = await createGoods({name, price, desc, pic})
        response.send({
            code: 100,
            msg: 'ok',
            res: result
        })
    } catch(err) {
        response.send({
            code: 102,
            msg: err.message,
        })
    }
    
})

module.exports = goodsRouter;
