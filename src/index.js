const express = require('express');
const calculate = require('./routes/calculate');

const app = express();

app.use(express.json());

app.use('/', calculate);

app.listen(process.env.PORT);