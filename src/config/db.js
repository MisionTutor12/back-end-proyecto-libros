const mongoose = require('mongoose');
function dbConnect(){
    mongoose.connect('mongodb+srv://root:root@cluster0.b4yvp.mongodb.net/ciclo4_2021?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
}


module.exports = dbConnect;