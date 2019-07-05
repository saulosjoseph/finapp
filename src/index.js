require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT || 3333;

try {
    const app = express();  
    app.use(cors());
    app.use(express.json());  
    app.use('/', routes);
    app.listen(port);
} catch (error) {
    console.log(error);
}