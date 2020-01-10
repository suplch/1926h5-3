const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });

const goodsSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    pic: String
})

const Goods = mongoose.model('Goods', goodsSchema)

async function findGoods() {
    let goods_list = await Goods.find();
    return goods_list;
}

async function delGoods(goods_id) {
    return await Goods.deleteOne({_id: goods_id}).exec();
}

async function createGoods(goods) {
    return await Goods.create(goods);
}

module.exports = {
    findGoods,
    delGoods,
    createGoods
}