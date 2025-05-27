// setuping the server using express built-in methods and reading the files ,settupinf middlewares .

const express = require('express');
const path = require('path');
const app = express();


// Serve static files and middleware
app.use(express.static('./public'));


// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
          //also a static asset
// })  

//7.instead of sending indexed.html file using res.sendFile() ,we can add it to static assests.
// When it comes to send files ,if we're using it to send back for  example index.html actually we use other two methods instead.(1st method : adding to static assests and 2nd : is SSR(server side rendering) using template engine)


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>');
})


app.listen(5000 , ()=>{
    console.log(`server is listening on http://localhost:5000`);
    
})


// 
//1.path.join()::
// Use when you want to construct a path relative to another path or to build file system paths without making them absolute.

//2.path.resolve()
//Use when you want to get the absolute path to a file or directory.

//3.A relative path is the path relative to your current location (usually the file or folder you’re in).
// An absolute path is the complete path from the root directory to the target file or folder.

//4.NOTE:(line :5)
// app.use(express.static('./public'));
// in the above line we have created new public folder named as public by convention,you can use of yours like in this directory we can also use navbar-app directly 

//5.app.use(express.static('./public'));
// this helps us to read file without hadnling the request for each file manually as we did in node.js .

//6.app.use(express.static('./public'));
//  we use app.use() method to setup middleware.