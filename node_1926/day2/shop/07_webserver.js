const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {

    try {
        const static = path.join(__dirname, 'static')
        const file = static + request.url;
        const stat = fs.statSync(file);
        if (stat.isFile(file)) {
            const content = fs.readFileSync(file);
            response.write(content);
        } else {
            response.write('page is not found 404')
        }
        response.end();
    } catch (e) {
        
    }
    
});

const port = 3000;
// 监听 3000 端口
server.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`服务已经启动 http://localhost:${port}`)
});