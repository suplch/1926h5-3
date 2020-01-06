const fs = require('fs');


fs.writeFile('./hello111.txt', '你好😃', function(err) {
    if (err) {
        console.log(err);
    }
})