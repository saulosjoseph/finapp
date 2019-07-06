require('dotenv').config();

const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://${process.env.ID}:${process.env.SENHA}@primeiro-meh8g.mongodb.net/test?retryWrites=true&w=majority`

try {
    
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));   
} catch (error) {
    console.log(error);
}

module.exports = mongoose;