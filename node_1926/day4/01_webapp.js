const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
// http 代理中间件
const proxy = require('http-proxy-middleware')

const http = require('http');


const path = require('path');

const auth = require('./router/auth');
const goods = require('./router/goods');

var jwt = require('jsonwebtoken');

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

// secret 是一个钥匙 字符串
let secret = 'shhhhh';

const app = express();
// haha 目录的绝对路径
const hahaPath = path.join(__dirname, 'haha')
// 静态资源中间件
const hahaMiddleware = express.static(hahaPath)
// 直接代理 新浪 网页
//app.use('/', proxy({target: 'https://sina.com.cn', changeOrigin: true}));

app.use('/', hahaMiddleware)


// 使用 auth 中间件, 当浏览器 请求 地址以  /auth 打头时候 执行 auth 中间件
app.use(cookieParser());
app.use(bodyParser.json())

const whiteList = [
    '/auth/login',
    '/auth/register'
]
// 解密 token 的自定义中间件
app.use(function(request, response, next) {
    
    if (whiteList.indexOf(request.url) !== -1) {
        next();
    } else {
        // jwt.verify 校验 token 是否有效
        jwt.verify(request.cookies.token, secret, async function(err, user) {
            if (err) {
                response.send({
                    code: 109,
                    msg: 'token 校验失效, 请重新登录'
                })
            } else {
                // 将解密的 user 对象 追加到 request 请求对象 的 user 属性中
                request.user = user;
                next();
            }
        });
    }

});

app.use('/auth', auth);
// 使用 goods 中间件, 当浏览器 请求 地址以  /goods 打头时候 执行 auth 中间件
app.use('/goods', goods)

app.post('/head', upload.single('logo'), function(req, res) {
    console.log(req.file);
    res.send({
        msg: '提交成功'
    })
});

const userHeadStore = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './heads')
    },
    // 给上传文件重命名
    filename: function (req, file, cb) {
        //req.cookies.token

        let extname = path.extname(file.originalname)
        
        cb(null, `${file.fieldname}-${req.user._id}${extname}`);
    }
});

const uploadUserHead = multer({
    storage: userHeadStore
});

app.post('/addhead', uploadUserHead.single('head'), function(req, res) {
    
    console.log(req.file);
    console.log(req.body.nickname)
    res.send({
        msg: '头像上传成功'
    })
})
// 配置 代理 中间件 访问 第三方网站数据
app.use('/ajax', proxy({target: 'http://m.maoyan.com', changeOrigin: true}));


app.get('/getmaoyan', function(req, res) {
    let url = 'http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=844E1B501FE311EA961CD36275BB4F817590FE81DB08466697EE7AE1D57CC0D7&optimus_risk_level=71&optimus_code=10';
    
    let client = http.get(url, function(response) {

        let datastr = '';
        response.on('data', function(chunk) {
            datastr += chunk.toString('utf8');
        });
        response.on('end', function() {
            
            let obj = JSON.parse(datastr);
            res.send(obj);
        })
    });
    client.on('error', function() {
        res.send({
            msg: '错误'
        })
    })
})

app.get('/test', function(req, res) {

})

const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('http://localhost:' + port);
});