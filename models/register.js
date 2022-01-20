const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    username:String,
    password:String,
    email: String,
    mobile:String,
    
}, { strict: false })

const register = mongoose.model('user', TaskSchema)//collection name in singular_form,Schema

module.exports = register