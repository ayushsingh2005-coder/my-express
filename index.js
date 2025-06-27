// HTTP METHODS :

const express = require('express');
const app = express();
let {people} = require('./data');

// static assest
app.use(express.static('./methods-public'));


// first and default method used to read data 
app.get('/api/people' ,(req,res)=>{
    res.status(200).json({success : true , data : people});
})

// handling problem 1 stated below :
app.post('/login',(req,res)=>{
    res.send('POST');
})


app.listen(5000 , ()=>{
    console.log(`server is listening at http://localhost:5000`);
})

// remember when we are sending the get request we're not sending the body but when we're sending a post request it's very crucial . 

// in index.html file ,the name attribute acts as key and the value inside it is the value of the key. 

//PROBLEM THAT CAN ARISE DURING OPERATING WITH POST METHOD(when request is coming):

// 1. We're not handling that
// 2. We don't jave the middleware that actually adds this data that the form .