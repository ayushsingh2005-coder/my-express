// THIRD PARTY MIDDLEWARE :

// visit morgan npm (commonly used third party middleware )
// npm i morgan - package installation 



const express = require('express');

const app = express();

const morgan = require('morgan');

const logger = require('./logger.js')

const authorize = require('./authorize')

// req => middleware => res

// 1.use vs route
// 2. options - our own /express /third party

//using multiple middleware in app.use using arrays (orders matters)

// app.use([logger,authorize]);

app.use(morgan('tiny'));

app.get('/' ,(req,res)=>{
    res.send('home page');
})
app.get('/about' ,(req,res)=>{
    res.send('About');
})
app.get('/api/products' ,(req,res)=>{
    res.send('Product');
})

app.get('/api/items',[logger,authorize] ,(req,res)=>{
    console.log(req.user);
    
    res.send('items');
})

app.listen(5000 , ()=>{
    console.log("server is listening at http://localhost:5000");
    
})

// GET /about 200 5 - 0.515 ms => this is the output that can be seen in the console screen , the method of requesting ,path ,status code  , response time.