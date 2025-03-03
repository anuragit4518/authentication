require('dotenv').config();

const express = require('express');

const cors = require('cors');//prevents request blockage
const mongoose = require('mongoose');
const getConnection = require("./utils/getConnection");

const userRoutes = require('./routes/user')
  
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'50mb'}));
  

app.use((error,req,res,next)=>{
    const message = error.message || 'server error';
    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({message:message});

})

app.use('/user',userRoutes);

getConnection(); 

app.listen(process.env.PORT,() =>
    console.log('server is running on port:'+process.env.PORT)
);


