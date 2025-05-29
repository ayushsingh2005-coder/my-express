// INTRODUCTION :➤ ➤ 
// ➤ API - JSON  VS  SSR - TEMPLATE
// ➤ route params 
// ➤ req.parmas


// in express or in http case ,api is all about setting up http interface to interact with our data(sent through json) and in order to send back our reslinse we're going to use res.json method which will do like example setting up the proper content type and stringfy our data.using RES,json method

// SSR : this is the other side where we setup the templated and send back entire html,css ,js and we we'll do it by using res.render method()


// ➤ API - JSON  VS  SSR - TEMPLATE

// SEND DATA         SEND TEMPLATE
// RES.JSON()        RES.RENDER()



// WHEN IT COMES TO EXPRESS IN MOST CASES , YOU'LL USE ONE OF  THE TWO FOLLOWING TWO OPTIONS :
//🔸USE IT TO SETUP API
//          OR
//🔸TEMPLATES WITH  SSR (Server Side Rendering)

// 🔧 res.json() — What It Is
// ➤ It’s a method in Express.js used to:
// Send a JSON response to the client (browser, frontend, or another server)

// Automatically:
//➤ Sets the Content-Type header to application/json.

//➤ Converts JavaScript objects/arrays into JSON format



const express = require('express');
const app = express();
const {products} = require('./data.js')

// app.get('/' , (req,res)=>{
//     res.json(products)  //print the json file in DOM
// })

app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href ="/api/products">products</a>');
})
// ----------------------------------------
//➤ ONE SPECIFIC ITEM FROM THE WHOLE COLLECTION
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);
//     res.json(singleProduct);
// });
// -----------------------------------------
// IF YOU WANNA SEND EVERYTHING NOT ANYTHING SPECIFICALLY ➤ res.json(products)
//------------------------------------------
//➤ IF YOU WANNA SEND SOMETHING SPECIFICALLY
// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,image} = product;
//         return {id,name,image}
//     })
//     res.json(newProducts);
// })
// -----------------------------------------


// :::: PROBLEM ---
// BUT WHAT IF WE HAVE HUNDRED OR THOUSAND OF PRODUCTS ,THEN app.get() IS NOT THE EFFICIENT METHOD ,HERE COMES THE METHOD 

//➤ Route Params : is a property in Express.js (a Node.js framework) that contains route parameters(Route parameters are dynamic values in the URL path) from the URL path of a request.

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req);
    console.log(req.params);

// productID comes from the URL when a user visits a specific link in your browser.

    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    if(!singleProduct){
        return res.status(404).send('<h1>404</h1>product does not exist');
    }
    res.json(singleProduct)
})


app.listen(5000 , ()=>{
    console.log("server is listening on http://localhost:5000");
    
})

