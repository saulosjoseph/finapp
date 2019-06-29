const teste = require('./controller/teste');
const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send(teste.teste());
})

app.get('/calculate', (req, res) => {
    res.send(teste.teste());
})

app.listen(port, () => console.log(`Listening on port ${port}`));