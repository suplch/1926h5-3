const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



const staticMiddleware = express.static(path.join(__dirname, '..'));
app.use(staticMiddleware);

app.use(bodyParser.json());

app.post('/auth/login', function(req, res) {
    // const uname = req.body.username;
    // const upwd = req.body.password;

    const {username, password} = req.body;

    if (username === 'zhang' && password === '123') {
        res.send({
            code: 100,
            msg: 'ok',
            user: {
                name: "张三",
                age: 18,
                sex: '女士'
            }
        })
    } else {
        res.send({
            code: 101,
            msg: 'err'
        })
    }
})

app.get('/message/list', function(req, res) {
    res.send({
        code: 100,
        msg: 'ok',
        msg_list: [
            {title: 'offer baidu', content: '15K 大offer'},
            {title: 'offer ali', content: '20k 大offer'},
        ]
    })
})


const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return;
    }
    console.log('http://localhost:' + port);
});