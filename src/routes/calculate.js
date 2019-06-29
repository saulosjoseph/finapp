const express = require('express');
const router = express.Router();
const calculate = require('../controller/calculate');

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
});

router.get('/calculate', (req, res) => {
    res.send(calculate.calculate(req.body))
});

module.exports = router;