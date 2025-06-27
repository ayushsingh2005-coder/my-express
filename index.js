// HTTP METHODS :

const express = require('express');
const app = express();
let {people} = require('./data');

// static assest
app.use(express.static('./'))


// first and default method used to read data 
app.get('/api/people' ,(req,res)=>{
    res.status(200).json({success : true , data : people});
})




app.listen(5000 , ()=>{
    console.log(`server is listening at http://localhost:5000`);
})