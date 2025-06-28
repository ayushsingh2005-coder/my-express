// HTTP METHODS :GET AND POST (Type 1:Form example)

const express = require('express');
const app = express();
let {people} = require('./data');

// static assest(This makes everything inside the methods-public folder accessible on the frontend via the browser.)
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({extended : false}))
// extended property allows us to choose betweeen parsing the URL-encoded data with the querystring library(when false) or the qs libraray (when true).


// first and default method used to read data 
app.get('/api/people' ,(req,res)=>{
    res.status(200).json({success : true , data : people});
})

// 2nd method to send data over server.

//PROBLEM THAT CAN ARISE DURING OPERATING WITH POST METHOD(when request is coming):

// 1. We're not handling that
// 2. We don't jave the middleware that actually adds this data that the form in this case is sending to our request .

// handling problem 1 stated below :
app.post('/login',(req,res)=>{
    const {name} = req.body;
    
    if(name){
        return res.status(200).send(`welcome ${name}`) 
    }
    res.status(401).send('please provide credentials')
    res.send('POST');
})


app.listen(5000 , ()=>{
    console.log(`server is listening at http://localhost:5000`);
})

// remember when we are sending the get request we're not sending the body but when we're sending a post request it's very crucial . 

// in index.html file ,the name attribute acts as key and the value inside it is the value of the key. 

// =========================================
// CONCEPTS :📝

// express.urlencoded({ extended: false })

// This line is middleware in Express.js that tells your server how to parse incoming form data (i.e., data sent from HTML <form> using POST method).

// you can search for parsing methods why we need this , the form data that the browser Submitted cannot be read by the express ,so we need to encode it first into object or any other type .