const express = require('express');
const calculate = require('./routes/calculate');
const port = 3000;

const app = express();

app.use(express.json());

app.use('/', calculate);

app.listen(port, () => console.log(`Listening on port ${port}`));