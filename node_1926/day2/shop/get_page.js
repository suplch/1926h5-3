const https = require('https');
const cheerio = require('cheerio')

https.get('https://www.sina.com.cn/', function(response) {

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

        const $ = cheerio.load(html);

        $('img').each(function(index, el) {
            console.log(index)
            console.log($(el).attr('src'))
        })

        $('a').each(function(index, el) {
            console.log( $(el).attr('href'))
            
        })

    })
})