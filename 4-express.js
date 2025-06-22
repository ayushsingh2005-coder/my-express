//➤ QUERY STRING Parameters / URL Parameters

// it is way for us to send small amounts of information to the server using the url

// visit Hn.angolia.com for api reference


const express = require('express');
const app = express();
const {products} = require('./data.js')

// app.get('/' , (req,res)=>{
//     res.json(products)  //print the json file in DOM
// })

app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href ="/api/products">products</a>');
})

// -----------------------------------------
//➤ IF YOU WANNA SEND SOMETHING SPECIFICALLY
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})

// ----------------------------------------
//➤ ONE SPECIFIC ITEM FROM THE WHOLE COLLECTION
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
});

//➤ String Query Parameter(we can add as many queries as we want )
//➤ FORMAT --> Url/Path?queryhere 

// now go the browser and search for the routes http://localhost:5000/api/v1/query?name=john ➤ hello world . you can combine using & like name=john&id=4 ➤prints in console screen 

app.get('/api/v1/query' , (req,res)=>{
    // console.log(req.query);
    const {search,limit} = req.query
    let sortedProducts = [...products];
    
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){

    // res.status(200).send('no product matched your search')

    // more common way to send unmatched req

    return res.status(200).json({sucess : true , data:[]});
}
    res.status(200).json(sortedProducts);
    // ❗ This line is never executed because res.json() already ends the response.
    // res.send('hello world');
})


// -----------------------------------------
// IF YOU WANNA SEND EVERYTHING NOT ANYTHING SPECIFICALLY ➤ res.json(products)
//------------------------------------------

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req);
    console.log(req.params);


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


//➤ 🧠 Concept: Returning Responses in Express.js
// When you're handling a request in Express (Node.js framework), you must ensure that only one response is sent per request. If you try to send two responses (e.g., res.send() or res.json() twice), it will result in an error like ➤ 
// Error: Can't set headers after they are sent.
// This happens because once Express sends a response, it finishes the response cycle, and trying to send more data afterward is invalid.


