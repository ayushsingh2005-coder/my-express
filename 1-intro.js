// const http = require('http');

// const object ={
//    name :"ayush",
//    course:"B.tech",
//    Branch :"cse"
// };
// const server = http.createServer((req, res) => {
//   if(req.url === '/about'){
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(`name: ${object.name}\ncourse: ${object.course}\nbranch: ${object.Branch}`);
//   console.log('user hit the server');
//   }
  
  
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// THE CODE WRITTEN ABOVE IS JUST NOTHING >

// ------------------------------------------

//THE CODE WRITTEN CODE WITH FOLLOWING ISSUES THAT WE MENTIONED BELOW 


const http =require('http')
const server = http.createServer((req,res)=>{
  console.log(req);
  const url = req.url
  //home page 
  if(url === '/'){
    res.writeHead(200,{'content-type':"text/html"})
    res.write('<h1>home page</h1>')
    res.end('this is the end');
  }
  
  // about page
  else if (url ==='/about'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1> about page</h1>')
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



// res.end() only takes one argument as string .

// we are having two major issue with our current setup :
//1.we dont't provide the info about the data that we're sending back  so we don't have any metadata about the body that we're sending out so we're not providing any information .we just go that end and then pass in the string.
// >>>> for solving this issue we came up with method >> res.WriteHead(status code [,status message][,headers])

//🔸headers should be given in key : value pairs

// res.end():
// Ends the response.
// No more data can be sent after this.
// Optionally, you can also pass data to it directly: res.end('some data')

//🔸STATUS CODE MATTERS for every response that we send .

//🔸req is a giant object
// useful methods: req.url ,req.method 

//🔸MIND-GREANADE :
// We are not limited to passing the html directly into res.write() or res.end 