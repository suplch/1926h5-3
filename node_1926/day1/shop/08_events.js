const EventEmitter = require('events');

const events = new EventEmitter();

// on 用来监听事件
events.on('我饿了', function(food) {
    console.log('我要吃 ' + food)
})

events.on('我渴了', function(drink) {
    console.log('我要喝 ' + drink)
})


// emit 方法用来产生事件 
events.emit('我饿了', '🥟');
events.emit('我渴了', '可乐');

events.on('data', function(chunk) {
    console.log('接受数据', chunk)
})

events.on('end', function() {
    console.log('结束')
})


//.....
events.emit('data', 'jfsadkfsafal;fasfasdfas;kf');
events.emit('data', 'jfsadkfsafal;fasfasdfas;kf');
events.emit('data', 'jfsadkfsafal;fasfasdfas;kf');

events.emit('end')