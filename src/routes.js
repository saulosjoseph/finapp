const connection = require('./database/mongooseConnection');
const User = require('./database/userSchema');
const express = require('express');
const router = express.Router();
const calculate = require('./controller/calculate');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
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
    const user = {
        name: req.body.name,
        total: req.body.total
    };
    const newUser = new User(user);
    const data = await newUser.save();
    res.send(data);
});

router.put('/user', async (req, res) => {
    const data = await User.find({
        name: req.body.name
    });
    res.send(data);
});

module.exports = router;