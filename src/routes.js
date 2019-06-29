const express = require('express');
const router = express.Router();
const calculate = require('./controller/calculate');

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
})

router.get('/', (req, res) => {
    res.json({ teste: 'teste' })
});

router.get('/calculate', (req, res) => {
    res.json(calculate.calculate(req.body))
});

module.exports = router;