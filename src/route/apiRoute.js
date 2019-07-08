const connection    = require('../database/mongooseConnection');
const User          = require('../database/userSchema');
const express       = require('express');
const bcrypt        = require('bcrypt-nodejs');
const jwt           = require('jsonwebtoken');
const apiRouter        = express.Router();

apiRouter.post('/createUser', async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: password
        };
        const newUser = new User(user);
        const data = await newUser.save();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
    
});

apiRouter.put('/authenticate', async (req, res) => {
    try {
        User.findOne({email: req.body.email}, (error, user) => {
            try {
                if(user === null) res.send(false);
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const token = jwt.sign(user.toJSON(), process.env.AUTH, {
                        expiresIn: 60*10
                    });
                    res.json({
                        success: true,
                        toke: token
                    });
                }                
            } catch (err) {
                res.send(err);
            }            
        }); 
    } catch (err) {
        res.send(err);
    }
});

apiRouter.use(function(req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token) {
        jwt.verify(token, process.env.AUTH, function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });    
            } else {
            req.decoded = decoded;    
            next();
            }
        });

        } else {
        return res.status(403).send({ 
            success: false
        });       
    }
});

apiRouter.get('/listUsers', async (req, res) => {
    try {
        await User.find({}, (error, user)=>{
            res.json(user);
        }); 
    } catch (err) {
        res.send(err);
    }
});

module.exports = apiRouter;