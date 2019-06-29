const express = require('express');
const router = express.Router();
const calculate = require('./controller/calculate');

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
})

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

module.exports = router;