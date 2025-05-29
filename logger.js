const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
    // res.send('testing')  //➤CASE 1
}

module.exports = logger;

// this file is exported/used in 5-express.js
