const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });

const goodsSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    pic: String
})

mongoose.connection.on('open', function() {
    console.log('数据库刚刚打开')
})

const Goods = mongoose.model('Goods', goodsSchema)

async function run() {

   const result = await Goods.create({name: '柠檬', price: 8, desc: '酸溜溜', pic: '🍋'});

   console.log(result);
   mongoose.connection.close();
}

run();


/*
🌰5

async function run() {
    const query = Goods.deleteOne({ name: '电脑' });
    const result = await query.exec();
    console.log(result);
    mongoose.connection.close();
}
run();

*/

/*
🌰 4
async function run() {
    // 先返回一个 query 对象
    // Goods.updateMany()
    const query = Goods.updateOne({ name: '西瓜' }, {$set: {price: 20}});
    let result = await query.exec();
    console.log(result);
    // { n: 1, nModified: 1, ok: 1 }
    mongoose.connection.close();
}

run();
*/

/*
🌰 3
async function run() {
    let result = await Goods.find( { price: {$lt: 20} }  );
    console.log(result);
    mongoose.connection.close();
}

run();
*/
/*

例子 2
const Goods = mongoose.model('Goods', goodsSchema)

async function run() {
    let result = await Goods.find();
    console.log(result);
    mongoose.connection.close();
}

run();
*/


/*
例子 1
async function run() {
    // new 数据模型
    const putao = new Goods({name: '葡萄', price: 10, desc: '来自新疆的大葡萄', pic: '🍇'})
    await putao.save()
    console.log('保持成功')
    // 关闭连接
    mongoose.connection.close();
}
run();

*/
