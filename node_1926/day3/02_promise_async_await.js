function startStudy() {
    return new Promise(function(resolve, reject) {
        console.log('努力学习...')
        setTimeout(function() {
            resolve('找到好工作')
            //reject('抱歉, 我发兑现')
        }, 5000);
    })
}

function startWork() {
    // Promise 就是一个承诺, 未来兑现, 或者不兑现
    return new Promise(function(resolve, reject) {
        console.log('努力工作...')
        setTimeout(function() {
            //resolve('给你100万年终奖金')
            reject('抱歉, 我发兑现')
        }, 3000);
    })
}



// 公司开始运行
async function run() {
    // 等待承诺的兑现
    let result = await startStudy();
    console.log(result);

    try {
        let result222 = await startWork();
        console.log(result222);
    } catch(reason) { // 当 try 块的代码 报错, 那么执行 catch 块的代码
        console.log('catch', reason)
    } finally {
        console.log('结束')
    }
    

    

}

run();

