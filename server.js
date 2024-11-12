const express = require('express');
const app = express();
const port = 5000;

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    let responseText = `'Hello World! Requested at: '${req.requestTime}`
    res.send(responseText)
})

app.listen(port, () => {
    console.log('Servidor Rodando...');
});
