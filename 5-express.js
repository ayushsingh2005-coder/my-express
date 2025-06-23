//📝 Intorduction : MIDDLEWARES  and app.use(middleware)📌
// =======================================
//📌Middleware are the functions that will execute during the request to the server .
// =======================================
// Each middleware functions has access to request and response objects .
// =======================================
//📌req ➤ middleware ➤ res
// =======================================
// when you work with middleware ,you must pass it on to a next middleware unless
//  you're terminating the whole cycle by sending back the response :: CASE 1 ::
// =======================================
//⚠️ : we've used separate file for middleware function (logger.js in the same directory).
// =======================================
//BEST PRACTICE :🔍
// keep the middleware function like logger  in separate file so that the main file code looks clean .
// =======================================
//❓PROBLEM :
// What if we have 50 or 100 or k middleware functions ,we have to apply to each of our routes  ➤ hectic and inefficient

// here the method comes in express.js 
// ➤ APP.USE(path(optional),middleware) 

// app.use(middleware)
//⚠️ Order Matter here: you have to invoke app.use(path ,middleware) at certain level

// ================ CODE =================

const express = require('express');

const app = express();

const logger = require('./logger.js')

app.use('/api',logger);  //logger is middleware.this is gonna apply to both of them :products as well as items 

// app.get('/' , logger ,(req,res)=>{
//     res.send('home');
// })
//➤ we can also put middleware function in between request and response as above stated.

app.get('/' ,(req,res)=>{
    res.send('home page');
})
app.get('/about' ,(req,res)=>{
    res.send('About');
})
app.get('/api/products' ,(req,res)=>{
    res.send('Product');
})
app.get('/api/items' ,(req,res)=>{
    res.send('items');
})

app.listen(5000 , ()=>{
    console.log("server is listening at http://localhost:5000");
    
})

// MORE ABOUT MIDDLEWARE IN 6-express.js