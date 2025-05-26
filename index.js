const http = require('http');
const { readFileSync } = require('fs');

// load all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/style.css');
const homeScript = readFileSync('./navbar-app/browser-app.js');
const homeImage = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(homePage);
  } 
  else if (url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.end(homeStyle);
  } 
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.end(homeScript);
  } 
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.end(homeImage);
  } 
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});



// this index.js file  is for the navbar-app folder that will create and run the server 

// how this all works behind 
//  1. when we run code that we have written above 
// only give us the html content without the applied css and js ,this is due to :

// first we are requesting the homepage : line 17 ->res.write(homePage) ,i serve this html file from the navbar app and then i have three more request 
// -->> one for styles ,one for  logo ,one for browser-app.js . 
// basically it all happened because the html reference the styles ,logos ,js so we send the content and now the browser starts reading the content and every time we have basically a path to our server browser is like hey server  give me this resource(styles,logo.svg,browser-app) 

// THE PROBLEM HERE IS  are we handling these request on the server ---->>> NO .
// we are handling basically : / , /about , and inside the else block .

// SO MANUALLY WE'LL HAVE TO REQUEST ALL THE FILES AND THEN ASSIGN THEM TO SOME KIND OF VARIABLE AND SET UP THESE PATHS like we did above (if you wanna see the issue before doing this ,just remove all the request section of all the files of navabar-app folder )