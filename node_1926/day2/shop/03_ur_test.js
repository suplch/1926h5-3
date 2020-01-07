const url = require('url');

const urlObj = url.parse('https://nodejs.org/dist/latest-v12.x/docs/api/url.html#url_url');


console.log(urlObj)

console.log(url.format(urlObj))

console.log(urlObj.pathname)

let link = new URL('https://nodejs.org/dist/latest-v12.x/docs/api/url.html#url_url')

console.log(link)