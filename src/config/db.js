const mongoose = require('mongoose');
function dbConnect(){
    mongoose.connect('mongodb://juanfj:%251234567890db1234567890%25@127.0.0.1:27017/capacitación_db?authSource=admin')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
}


module.exports = dbConnect;