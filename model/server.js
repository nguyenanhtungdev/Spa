const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const path = require('path')

// dotenv.config({ path: '../config.env' });

// const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
const DB = "mongodb+srv://tn9195981:UY0qxAT9Z7PR8y3J@cluster0.hsv5h.mongodb.net/Data_diva?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB).then(con => {
    console.log('DB connection successful!');
}).catch(err => {
    console.error('DB connection error:', err);
});

const schema = new mongoose.Schema({
    name: String,
    email: String,
    // address: {
    //     type: String,
    //     default: "HCM"
    // }
    SDT: String
});

const User = mongoose.model('Default', schema, 'FeedBack');

module.exports = {User};