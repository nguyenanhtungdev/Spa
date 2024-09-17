const mongoose = require('mongoose'); // Import mongoose
// const User = require('./server');
const {User} = require('./server');

function addData(userData){
    const user = new User(userData);

    user.save()
    .then(result => {
        console.log('Inserted document into the "Users" collection. The document inserted with "_id" is:', result._id);
    })
    .catch(err => {
        console.log('Error inserting document:', err);
    })
}

//Tim data
function findAllData(){
    return User.find()
}

//Export

module.exports = {
    addData,
    findAllData
}