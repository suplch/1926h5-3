// 自定义 json 中间件
module.exports = {
    json() {
        return function(request, response, next) {
            // 因为 request.method 大小写不一定
            // 统一改为 大写
            if (request.method.toUpperCase() === 'POST') {
                let userData = '';
                // request 实际上 是一个 请求流对象
                // 监听 data 事件, 获取提交的数据
                request.on('data', function(chunk) {
                    userData += chunk.toString('utf8')
                });
                // 在 end 事件 里面 处理最终的数据
                request.on('end', function() {
                    console.log(userData);
                    // 将提交 的 json 字符串, 转换为 js 对象
                    // 赋值 给 request.body 属性, 供后续的使用
                    request.body = JSON.parse(userData)
                    // 不要忘了调用 next 函数, 否则会导致 浏览器一直等待
                    next();
                })
            } else {
                // 如果本 json 解析不了, 继续 next
                next();
            }
        }
    }
}