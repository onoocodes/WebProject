const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const applicationRoute = require('./routes/applicationRoute');
const app = express();

//connecting to database 
mongoose.connect('mongodb+srv://onoocdoes:Kanyewest892@cluster0-0rnmm.mongodb.net/test?retryWrites=true&w=majority'
,{useNewUrlParser : true , useUnifiedTopology : true}).then(console.log('connected to db')).catch(err=>console.log(err));

//creating server
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log('server is listenning'));

//bodyPaser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//sample route
app.use('/applications',applicationRoute);

