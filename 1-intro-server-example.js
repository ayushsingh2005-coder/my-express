const http =require('http')

const {readFileSync, read} = require('fs');

// get all files 

// we are using readFileSync because of two reasons : we are not invoking this everytime someone comes to the server.keep in mind that we require that file when we insrantiate the our server initial time when server starts running

const  homePage = readFileSync('./index.html');

const server = http.createServer((req,res)=>{
  // console.log(req);
  const url = req.url
  //home page 
  if(url === '/'){
    res.writeHead(200,{'content-type':"text/html"})
    res.write(homePage)
    res.end('this is the end');
  }
  
  // about page
  else if (url ==='/about'){
    res.writeHead(200, {'content-type' : 'text/plain'})
    res.write('about page')
    res.end()
  }
  // 404
  else{
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
  }
  
})
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
