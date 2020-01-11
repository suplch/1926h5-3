### nodejs 基本介绍
+ 服务端 javascript执行平台
+ 会NodeJS 有什么好处
    - 可以更好的掌握前端技术
    - 可以开发 web 服务器, 
    - 可以开发命令行工具, (比如 gulp, webpack 等打包工具就是nodejs 开发的)
### 环境安装(node nvm, npm)
    官网 https://nodejs.org/en/
    中文 http://nodejs.cn/api/
### REPL 环境的使用
    交互式命令
### js文件的执行方式
- js 单线程执行
- 异步任务, 同步任务

    
### 模块/包与commonjs 规范
- 内置  (系统自带, node安装好就已经存在)
- 自定义 (项目里独立的js文件, 根据commonjs 规范定义)
- 第三方模块 (被安装在 node-modules 文件夹中)
    + npm (nodejs  package manager) nodejs 包管理器
    + npm init   
    + npm install 模块名 --save
    + npm uninstall 模块名


### 内置模块详解
- process 进程对象
    + process.argv 返回命令行参数数组
    + process.exit 退出程序
- 全局变量
    + __dirname  当前js文件所在的路径
    + __filename   当前js文件的完整路径 包括文件名
- Path 文件路径
    + path.join
    + path.resolve
    + path.extname
- FS 文件操作
    + require('fs') 模块
    + fs.existsSync(path) 检查文件是否存在
    + fs.readFile 与 fs.readFileSync(path, encoding)
    + fs.writeFile 与 fs.writeFileSync(path)
    + 小案例 (统计英文单词频率)
- Stream
    + fs.createReadStream(path);
    + fs.createWriteStream(path);
    + stream pipe 管道
    + 小案例 (实现一个文件copy)
- Event
    + require('events');
    + events.on(eventName, function(data){})
    + events.emit(eventName, data)
- Http(s) (爬虫)
    + http.get('url', handler)
    + http.request(options)
    + cheerio模块 解析返回的html结果
    + 小案例 (爬取 一个网站内容)
- Promise
    + 让异步操作更简单
    + async await
- Url
    + url 介绍
    + parse
    + format
- Query String
    + parse
    + stringify
    + escape
    + unescape

作业  深度遍历  
用nodejs 遍历目录树 (参考 nodejs.org 官网 文档 fs.readdir)

### 服务器相关知识
    - 什么是web服务器
    - 前后端分离与耦合架构概念
        + 前后端混合开发, 例如 传统的php, jsp
        + 分离开发, JavaScript渲染页面, 通过ajax 方式访问后台数据, 服务端只提供数据接口
        + 分离的好处, 后台的服务接口可重用, 比如可以给 android, ios, web 前端提供统一的数据
    - Http 静态web服务器
        + MIME 类型
            - text/html
            - text/css
            - image/gif
            - image/png
            - image/jpeg
            - application/javascript
            - video/mp4

### Express 基础
    - Express 介绍
    - 静态资源托管
    -  npm install express --save-dev

### 中间件 链式处理请求
    - 1 express.static
    - 2 require('body-parser').json()
    - 3 require('cookie-parser')
    - 3 如何自定义中间件
    - 4 模板引擎EJS

### 路由
    - 1 路由的本质也是一个中间件

### nodemon 实时监听
    - npm install nodemon --save
    - nodemon test.js

作业
将二阶段的前端项目部署到 express 中


晚自习: 

安装 MongoDB 数据库软件
### mongodb 环境配置安装
https://www.mongodb.com/
> 
> 下载`msi`的`window`安装包，可以装到C盘或者D盘目录下
> 
> # 配置
> ```shell
> 
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> bin 文件夹下有若干个 .exe 结尾的文件, exe 是windows的可执行文件
> mongo.exe (mongo 的客户端软件)    
> mongod.exe 是 mongo 数据库服务器
> 
> ```
> 
> 所以在bin文件夹下找到mongod.exe命令，然后通过管理员执行`mongod --dbpath x路径x`，路径可以是任何地方，我这里选择在D盘的MongoDB目录下，当然路径不要包含特殊的字符串，比如`Program Files (x86)`也不行
> 
> ```shell
> d: 
> cd D:\Program Files (x86)\MongoDB\Server\3.2\bin
> mongod.exe --dbpath D:\mongodb\data\db
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31977540-fc0a5a6e-b96f-11e7-9a2b-34d66d7241c4.png)
> 
> # 命令行
> 经过上面的配置之后，就可以返回bin目录下找到`mongo.exe`命令，并管理员下执行，就可以出现mongodb的命令行模式
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31978099-57bce3ca-b972-11e7-88bd-30f5d68036ed.png)
> 
> 然后就可以使用下面的命令来测试了
>
### mongod
> ```js
> db.help()//帮助
> db.stats()//统计
> ```
> 
> # 显示数据库
> ```
> show dbs
> ```
> 
> 检查当前选择的数据库
> 
> ```
> db
> ```
> 
> # 添加数据库
> **数据库名**为数据库创建的名字，使用该命令后会默认切换到对应的数据库，并且在数据库中添加选项，数据库信息才显示，如果默认就有该数据库，那就是切换到对应的数据库里面
> 
> ```
> use 数据库名
> ```
> 
> # 删除数据库
> 先切换到对应的数据库，然后再执行`db.dropDatabase()`删除该数据库
> 
> ```
> use 数据库名
> //switched to db 数据库名
> db.dropDatabase()
> ```
> 
> # 显示集合
> 用一下命令可以检查创建的集合
> 
> ```
> show collections
> ```
> 
> # 添加集合
> 在创建完数据库之后，我们就可以创建集合
> 
> ```
> db.createCollection(集合名字name，设置参数options[对象类型])
> ```
> 
> **name**是要创建的集合的名称。 **options**是一个文档，用于指定集合的配置
> 
> 参数 类型  描述
> name   String  要创建的集合的名称
> options    Document    (可选)指定有关内存大小和索引的选项
> **options**参数是可选的，因此只需要指定集合的名称。 以下是可以使用的选项列表：
> 
> 字段 类型  描述
> capped Boolean (可选)如果为true，则启用封闭的集合。上限集合是固定大小的集合，它在达到其最大大小时自动覆盖其最旧的条目。 如果指定true，则还需要指定size参数。
> autoIndexId    Boolean (可选)如果为true，则在_id字段上自动创建索引。默认值为false。
> size   数字  (可选)指定上限集合的最大大小(以字节为单位)。 如果capped为true，那么还需要指定此字段的值。
> max    数字  (可选)指定上限集合中允许的最大文档数。
> 由于**option**是可选，我们也可以不带配置项创建集合
> 
> ```js
> db.createCollection("mycollection")
> ```
> 
> # 删除集合
> `db.collection.drop()`用于从数据库中删除集合
> 
> ```js
> db.集合名.drop()
> ```
> 
> 比如我们可以测试以下操作
> 
> ```
> db.createCollection("wscats")//创建名为wscats的集合
> show collections//显示该数据库所有集合   wscats
> db.wscats.drop()//删除名为wscats的集合
> ```
> 
> # 查看文档
> 最简单查看文档的方法就是`find()`，会检索集合中所有的文档结果
> 
> ```js
> db.集合名.find()
> ```
> 
> 要以格式化的方式显示结果，可以使用`pretty()`方法。
> 
> ```js
> db.集合名.find().pretty()
> ```
> 
> ## 1.固值寻找
> 寻找age集合里面所有含有属性值为wscats的文档结果，相当于`where name = 'wscats'`
> 
> ```js
> db.age.find({name:"wscats"})
> ```
> 
> ## 2.范值寻找
- 操作 语法  示例  等效语句
- 相等 {:} `db.age.find({"name":"wscats"}).pretty()`   where name = 'wscats'
- 小于 {:{$lt:}}   `db.age.find({"likes":{$lt:50}}).pretty()`  where likes < 50
- 小于等于   {:{$lte:}}  `db.age.find({"likes":{$lte:50}}).pretty()` where likes <= 50
- 大于 {:{$gt:}}   `db.age.find({"likes":{$gt:50}}).pretty()`  where likes > 50
- 大于等于   {:{$gte:}}  `db.age.find({"likes":{$gte:50}}).pretty()` where likes >= 50
- 不等于    {:{$ne:}}   `db.age.find({"likes":{$ne:50}}).pretty()`  where likes != 50
> ## 3.AND和OR寻找
> ### AND
> 在find()方法中，如果通过使用`，`将它们分开传递多个键，则mongodb将其视为**AND**条件。 以下是AND的基本语法
> 
> 寻找`_id`为1并且`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $and: [
>          {"_id": 1}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### OR
> 在要根据OR条件查询文档，需要使用`$or`关键字。以下是OR条件的基本语法
> 
> 寻找`name`为corrine或者`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $or: [
>          {"name": "corrine"}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### AND和OR等结合
> 相当于语句`where title = "wscats" OR ( title = "corrine" AND _id < 5)`
> 
> ```js
> db.age.find({
>   $or: [{
>     "title": "wscats"
>   }, {
>     $and: [{
>       "title": "corrine"
>     }, {
>       "_id": {
>         $lte: 5
>       }
>     }]
>   }]
> })
> ```
> 
> # 插入文档
> 文档的数据结构和JSON基本一样。
> 所有存储在集合中的数据都是BSON格式。
> BSON是一种类json的一种二进制形式的存储格式,简称**Binary JSON**。
> 
> 要将数据插入到mongodb集合中，需要使用mongodb的`insert()`或`save()`方法。
> 
> ```js
> db.集合名.insert(document)
> ```
> 
> 比如我们可以插入以下数据
> 
> ```js
> db.wscats.insert({
>    _id: 100,
>    title: 'MongoDB Tutorials', 
>    description: 'node_tutorials',
>    by: 'Oaoafly',
>    url: 'https://github.com/Wscats/node-tutorial',
>    tags: ['wscat','MongoDB', 'database', 'NoSQL','node'],
>    num: 100,
> })
> ```
> 
> 也可以支持插入多个，注意传入的是数组形式
> 
> ```
> db.wscats.insert([{
>    _id: 100,
>    title: ‘Hello’
> },{
>    _id: 101,
>    title: ‘World’
> }])
> ```
> 
> 在插入的文档中，如果不指定_id参数，那么mongodb会为此文档分配一个唯一的ObjectId
> 要插入文档，也可以使用`db.post.save(document)`。如果不在文档中指定_id，那么`save()`方法将与`insert()`方法一样自动分配ID的值。如果指定_id，则将以save()方法的形式替换包含**_id**的文档的全部数据。
> 
> ```js
> db.wscats.save({
>    _id: 111,
>    title: 'Oaoafly Wscats', 
> })
> ```
> 
> # 更新文档
> ## 1.update()方法
> 寻找第一条title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> })
> ```
> 
> 默认情况下，mongodb只会更新一个文档。要更新多个文档，需要将参数`multi`设置为true，还可以配合find方法里面的各种复杂条件判断来筛选结果，然后更新多个文档
> 
> 寻找所有title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> }, {
>   multi: true
> })
> ```
> 
> ## 2.save()方法
> 将`_id`主键为3的文档，覆盖新的值，注意`_id`为必传
> 
> ```
> db.age.save({
>   '_id':3,
>   'title': 'wscats'
> })
> ```
> # 删除文档
> 删除主键`_id`为3的文档，默认是删除多条
> 
> ```js
> db.age.remove({
>   '_id':3
> })
> ```
> 
> 建议在执行`remove()`函数前先执行`find()`命令来判断执行的条件是否正确
> 
> 如果你只想删除第一条找到的记录可以设置**justOne**为1，如下所示
> 
> ```js
> db.age.remove({...},1)
> ```
> 
> 全部删除
> 
> ```js
> db.age.remove({})
> ```
> 
> # Limit与Skip方法
> ## Limit
> 如果你需要在mongodb中读取指定数量的数据记录，可以使用mongodb的Limit方法，`limit()`方法接受一个数字参数，该参数指定从mongodb中读取的记录条数。
> 
> ```js
> db.age.find().limit(数量)
> ```
> 
> ## Skip
> 我们除了可以使用`limit()`方法来读取指定数量的数据外，还可以使用`skip()`方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
> 
> ```js
> db.age.find().limit(数量).skip(数量)
> //skip()方法默认值为0
> ```
> 
> 所以我们在实现分页的时候就可以用limit来限制每页多少条数据(一般固定一个值)，用skip来决定显示第几页(一个有规律变动的值)
> 
> # 排序
> 在mongodb中使用使用`sort()`方法对数据进行排序，`sort()`方法可以通过参数指定排序的字段，并使用1和-1来指定排序的方式，其中1为升序排列，而-1是用于降序排列。
> 
> 1  升序排列
> -1 降序排列
> ```
> db.集合名.find().sort({键值(属性值):1})
> ```
> 
> 把`age`集合表重新根据`_id`主键进行降序排列
> 
> ```js
> db.age.find().sort({
>   "_id": -1
> })
> ```
> 

# Node.js连接 安装 mongoose 第三方模块 访问mongo数据库
+ http://www.mongoosejs.net/ 官网
+ npm install mongoose --save
```javascript
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/store',  {
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

```
# 定义数据模型
```javascript
const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    pic: String,
});
// 定义一个数据模型 Product 包含 name , price, pic
const Product = mongoose.model('Product', ProductSchema);
const watermelon = await Product.create({
    name: '西瓜', 
    price: 10, 
    pic: '🍉'
});
console.log(watermelon);
```
```javascript
// 准备数据模型 保存到数据库中
const fruits = [
    {name: '西瓜', price: 10, pic: '🍉'},
    {name: '葡萄', price: 10, pic: '🍇'},
    {name: '桃子', price: 10, pic: '🍑'},
    {name: '苹果', price: 10, pic: '🍎'},
    {name: '柠檬', price: 10, pic: '🍋'},
]
```

# 删除数据
```javascript
await Product.deleteMany().exec();

```
# 查找数据
```javascript
const products = await Product.find().exec();
for (let product of products) {
    console.log(product);
}
```
#修改数据
```javascript
const rows = await Product.updateMany({price: {$lt: 20}}, {price: 0}).exec();
console.log('价格小于 20 清零');
console.log(rows);
```

### token 验证
+ 用户登录 服务器端产生一个token (加密字符串) 发送给前端 
+ 前端将token 进行保存   
+ 前端发起数据请求的时候携带token  
+ 服务端 验证token 是否合法  如果合法继续操作   不合法终止操作
+ token 的使用场景   无状态请求   保持用户的登录状态  第三方登录（token+auth2.0）  

```js
const jwt=require('jsonwebtoken')
const scrict='sdjfksdjflajflasjflasjflksf'
 
function creatToken(palyload){
    // 产生token
    palyload.ctime=Date.now()
    return jwt.sign(palyload,scrict)
}
function checkToken(token){
    return  new Promise((resovle,reject)=>{
        jwt.verify(token,scrict,(err,data)=>{
           if(err){ reject('token 验证失败')}
           resovle(data)
           })
    })
     
}
module.exports={
    creatToken,checkToken
}
```


### jwt+验证码实现注册登录
+ require('jsonwebtoken')
    - var jwt = require('jsonwebtoken');
    - var token = jwt.sign({_id: '11111', userName: 'zhang' }, 'shhhhh');
    - var decoded = jwt.verify(token, 'shhhhh');
    - console.log(decoded.foo) // bar


### 服务器代理跨域原理
+ 利用http-proxy-middleware实现代理跨域
   - 利用http-proxy-middleware实现代理跨域
   - const proxy = require('http-proxy-middleware')
   - app.use('/api', proxy({target: 'http://m.maoyan.com', changeOrigin: true}));
   - 当访问 http://localhost/api   相当于   http://10.119.168.87:4000/api
+ 浏览器直接调用不同域api被拦截

    - 访问 http://m.maoyan.com
    - app.use('/v1/restserver/ting', proxy({target: 'http://tingapi.ting.baidu.com', changeOrigin: true}));
    - 使用nodejs写一个代理服务访问不同域api

    ## 文件上传

+ npm install multer --save
```javascript
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // 给上传文件重命名
    filename: function (req, file, cb) {
        var fileFormat = file.originalname.split('.');

        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

const upload = multer({
    storage: storage
});


const app = express();

app.use('/static', express.static('public'));

app.post('/upload-single', upload.single('logo'), function (req, res) {
    console.log(req.file);

    console.log('文件类型：%s', req.file.mimetype);
    console.log('原始文件名：%s', req.file.originalname);
    console.log((req.file.originalname).split("."));
    console.log('文件大小：%s', req.file.size);
    console.log('文件保存路径：%s', req.file.path);
    console.log(req.body.username);
    res.send({
        ret_code: '0',
        filepath: req.file.path
    });
});

app.listen(3000);

```
前端
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="axios.min.js"></script>
    <script>
        function doUpload() {
            /*
            $.ajax({
                url: '/upload-single',
                type: 'POST',
                cache: false, //不必须
                data: new FormData($('#uploadForm')[0]),
                processData: false,//必须
                contentType: false,//必须
                success: function(data) {
                    console.log(data)
                    if (data.ret_code === '0') {
                        alert('上传成功 文件路径: ' + data.filepath)
                    }
                }
            });
            */

              var instance = axios.create({
                baseURL: '/',
                timeout: 1000000,
                headers: {
                  "Content-Type": 'multipart/form-data'
                }
              });

              instance.post('/upload-single', new FormData(document.getElementById('uploadForm'))).then((res) => {
                console.log(res);
                alert(JSON.stringify(res.data));
              });
        }
    </script>
</head>
<body>
    <form id="uploadForm" action="/upload-single" method="post" enctype="multipart/form-data">
        <input type="file" name="logo" />
        <input type="text" name="username" />
        <input type="submit" value="表单提交">
    </form>
    <button onclick="doUpload()">ajax提交</button>
</body>
</html>
```

- 单元测试
## 自动化测试 mocha
Mocha('摩卡')，诞生于2011年，现在比较流行的JavaSscript测试框架之一,可以运行于Node环境和浏览器环境
 
测试框架:可以运行测试的工具。通过他，可以为JavaScript应用 添加测试,从而保证代码质量
> 参考文档
[mochajs](https://mochajs.org/)
[mocha中文文档](https://segmentfault.com/a/1190000011362879)
### 安装配置
 
使用npm 全局安装
 
``` 
$ npm install --global mocha
```
 
项目依赖 局部安装 
 
```
$ npm install mocha
```