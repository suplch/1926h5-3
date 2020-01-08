// Promise 就是一个承诺, 未来兑现, 或者不兑现
const p1 = new Promise(function(resolve, reject) {
    console.log('努力工作...')
    setTimeout(function() {
        resolve('给你100万年终奖金')
        //reject('抱歉, 我发兑现')
    }, 3000);

})

p1.then(function(result) {
    console.log('then', result)
}).catch(function(reason) {
    console.log('catch ', reason);
}).finally(function() {
    console.log('结束')
});
