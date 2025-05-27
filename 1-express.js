//this is the basic example of how you would create server and handle request 
// learn express from this file onwards :

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('user hit the response');
    res.status(200).send('home page');
});

app.get('/about', (req, res) => {
    res.status(200).send('about page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

// the above app.all() section code is only compatible with express 4.x ,for version 5.x ,use middlewares 

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});


// express() internally uses the http module under the hood. It is same as creating a http server using .createServer() method in node.js.
// express() provide some predefined methods to work with :

//🔹app.get(path, callback)
//🔹 app.post(path, callback) 
//🔹 app.put(path, callback)
//🔹 app.delete(path, callback)
// ----------------------------------------
// THE ABOVE 4 METHODS SERVES AS VERB OF HTTP AND REPRESENTS WHAT THE USER IS TRYING TO DO(read , create , update ,remove ) 
//          and 
// BY DEFAULT ,THE BROWSER PERFORM THE GET REQUEST.
// ----------------------------------------


//🔹app.get(path, callback)
// Used to retrieve data (READ).

//🔹 app.post(path, callback)
// Used to send data to the server to create something (CREATE).

//🔹 app.put(path, callback)
// Used to update existing data (UPDATE entire object).


//🔹 app.delete(path, callback)
// Used to delete data (DELETE).

//🔹 app.all(path, callback) :  
// Handles all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific route.

//🔹 app.use([path], middleware) : 
//  Mounts middleware functions globally or at a specific path.

//🔹 app.listen(port, callback)  : 
//  Starts the server and begins listening for incoming requests on a specified port.

