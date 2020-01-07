const https = require('https');
const cheerio = require('cheerio')

function getPage(url) {
    return new Promise(function(resolve, reject) {
        const request = https.get(url, function(response) {
            let n = 0;
            let total = 0;
            let html = '';
            response.on('data', function(chunk) {
                n++;
                total += chunk.length;
                console.log(`接受数据 第${n}块 :`, chunk)
                html += chunk.toString('utf8')
            })

            response.on('end', function() {
                console.log('完毕, 共接受到' + total + ' 字节')
                console.log('------------------------------------------')
                console.log(html)

                resolve(html)
            })
        })

        request.on('error', function(err) {
            reject(err)
        })
    });
}

async function run() {
    try {
        let html = await getPage('https://www.sina.com.cn/');
        const $ = cheerio.load(html);

        $('img').each(function(index, el) {
            console.log(index)
            console.log($(el).attr('src'))
        })

        $('a').each(function(index, el) {
            console.log( $(el).attr('href'))

        })

    } catch (err) {
        console.log(err);
    }
    
}

run();


