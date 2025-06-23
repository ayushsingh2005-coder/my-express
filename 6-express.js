
const express = require('express');

const app = express();

const logger = require('./logger.js')

const authorize = require('./authorize')

//using multiple middleware in app.use using arrays (orders matters)

// app.use([logger,authorize]);

app.get('/' ,(req,res)=>{
    res.send('home page');
})
app.get('/about' ,(req,res)=>{
    res.send('About');
})
app.get('/api/products' ,(req,res)=>{
    res.send('Product');
})
// suppose we don't wanna apply the middleware to every request ,we can just put it in single request like we did below 
app.get('/api/items',[logger,authorize] ,(req,res)=>{
    console.log(req.user);
    
    res.send('items');
})

app.listen(5000 , ()=>{
    console.log("server is listening at http://localhost:5000");
    
})

//NOTE :
// we can add middleware ,use their function and also we can use any of the stored value inside any variable from  the middleware function .

// console.log(req.user) //req.user is present in authorize.js.

// put the above console.log() in any of the routes above and you will get the results in console terminal after writing the same url in browser

// when you wanna put middleware more than one and specifically to any of the routes ,put the middlewares inside the array separated by commas and put it after the path of any route separated by commas