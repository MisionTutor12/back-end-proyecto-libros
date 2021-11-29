const Express = require('express');
const cors = require('cors');
const router = require('./routes/libro');
const dbConnect = require('./config/db')

const app = Express();
dbConnect();
app.use(Express.json());
app.use(cors());
app.use('/app', router);
const puerto = process.env.PORT || 3000;
app.listen(puerto,()=>{
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});