const connection = require('./database/mongooseConnection');
const User = require('./database/userSchema');
const express = require('express');
const router = express.Router();
const calculate = require('./controller/calculate');
const cors = require('cors');

router.get('/favicon.ico', (req, res) => {
    res.sendFile('favicon.ico', { root: './public' });
});

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

router.get('/style.css', (req, res) => {
    res.sendFile('style.css', { root: './public' });
});

router.get('/main.js', (req, res) => {
    res.sendFile('main.js', { root: './public' });
});

router.put('/calculate', (req, res) => {
    res.json(calculate.calculate(req.body))
});

router.post('/user', async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            total: req.body.total
        };
        const newUser = new User(user);
        const data = await newUser.save();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
    
});

router.get('/user', cors(), async (req, res) => {
    try {
        const data = await User.find();
        res.send(data);   
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;