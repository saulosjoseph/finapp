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

router.get('/newuser', (req, res) => {
    res.sendFile('newuser.html', { root: './public' });
});

router.get('/style.css', (req, res) => {
    res.sendFile('style.css', { root: './public' });
});

router.get('/main.js', (req, res) => {
    res.sendFile('main.js', { root: './public' });
});

router.get('/newuser.js', (req, res) => {
    res.sendFile('newuser.js', { root: './public' });
});

router.post('/user', async (req, res) => {
    try {
        const user = {
            id: req.body.id,
            password: req.body.password
        };
        const newUser = new User(user);
        const data = await newUser.save();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
    
});

router.put('/user', cors(), async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);   
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;