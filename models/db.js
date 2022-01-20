const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
module.exports = mongoose.connect('mongodb://localhost:27017/logdata', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
  
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

