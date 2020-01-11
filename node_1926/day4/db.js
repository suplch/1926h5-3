const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });

const goodsSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    pic: String
})

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const Goods = mongoose.model('Goods', goodsSchema)
const User = mongoose.model('User', userSchema)

async function getUserByUserName(username) {
    let query = User.findOne({username: username});
    let user = await query.exec();
    return user;
}

async function registerUser(user) {
    console.log('registerUser', user)
    return await User.create(user);
}

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
    createGoods,
    registerUser,
    getUserByUserName
}