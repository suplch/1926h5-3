const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoo');

const Cat = mongoose.model('Cat', { name: String, age: Number });

const kitty = new Cat({ name: 'Zildjian', age: 3 });

kitty.save().then(() => console.log('meow'));