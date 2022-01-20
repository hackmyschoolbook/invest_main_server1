const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    email:String,
    vechile:String,
},{strict:false})

const Car = mongoose.model('car', TaskSchema)//collection name in singular_form,Schema

module.exports = Car