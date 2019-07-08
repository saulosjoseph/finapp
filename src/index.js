require('dotenv').config();
const express   = require('express');
const routes    = require('./routes');
const apiRoutes    = require('./route/apiRoute');
const port      = process.env.PORT || 3333;

try {
    const app = express();  
    app.set('superNode-auth', process.env.AUTH);
    app.use(express.json());
    app.use('/', routes);
    app.use('/api', apiRoutes);
    app.listen(port);
} catch (error) {
    console.log(error);
}