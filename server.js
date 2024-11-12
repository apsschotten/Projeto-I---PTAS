const express = require('express');
const app = express();
const port = 5000;
var userRoute = require('./userRoute.js');

app.use('/', userRoute)

app.listen(port, () => {
    console.log('Servidor Rodando...');
});
