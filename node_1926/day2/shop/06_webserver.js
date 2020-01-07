const http = require('http');

const server = http.createServer(function(request, response) {

    if (request.url === '/index.html') {
        response.write(`
            <html>
                <head>
                    <link href="style.css" rel="stylesheet" /> 
                </head>
                <body class="largefont" style="color: red">
                 index page
                </body>
            </html>
        `);
    } else if (request.url === '/about.html') {
        response.write(`
            <html>
                <body style="color: green">
                 about page
                </body>
            </html>
        `);
    } else if (request.url === '/style.css') {
        response.write(`
            .largefont {
                font-size: 50px
            }
        `);
    } else {
        response.write(`
            <html>
                <body>
                  page not found 404
                </body>
            </html>
        `);
    }

    
    response.end();
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