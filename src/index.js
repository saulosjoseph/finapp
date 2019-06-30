const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.URI
const port = process.env.PORT || 3333;

const client = new MongoClient(uri, { useNewUrlParser: true });
try {
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        if (err) return console.log(err)
        const db = client.db('finapp')
    
        const app = express();  
        app.use(express.json());  
        app.use('/', routes); 
        app.post('/test', (req, res) => {
            db.collection('test').insertOne(req.body, (err, result) => {
                if (err) return console.log(err)

                console.log('data save in database');
                res.send('Ok');
            })
        })

        app.listen(port);
    });
} catch (error) {
    console.log(error);
}