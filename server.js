const express =require('express')
const router = require('./routes/routes');
const about=require('./routes/about');
const control=require('./routes/web')
require('./models/db.js')

const cors = require('cors');
const register = require('./routes/register');

const app=express()
app.use(express.json())
app.use(cors())
app.use('/ease',control)
// app.use('/',router)
app.use('/',register)
app.use('/register', register)

app.use('/about',about)

app.listen('8088',err =>{
    if(err) console.log(err)
    console.log('Server is started at port nim 8088')
})