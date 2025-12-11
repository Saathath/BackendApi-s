const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();

const PORT = process.env.PORT || 8000;

//Middleware
app.use(bodyParser.json());

//Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=>
    console.log('MongoDB connected'))
.catch((e)=>
    console.log('DB error',e));

//use routes
app.use('/api/posts',postRoutes);

app.listen(PORT,()=>{
    console.log(`server running successfully ${PORT}`)
})