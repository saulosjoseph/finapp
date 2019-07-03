require('dotenv').config();

const mongoose = require('mongoose');
const mongoDB = process.env.URI;

try {
    
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));   
} catch (error) {
    console.log(error);
}

module.exports = mongoose;