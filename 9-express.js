// HTTP METHODS :GET AND POST (Type 2: javascript form) and PUT Method

const express = require('express');
const app = express();
let {people} = require('./data');

// static assests
// app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({extended : false}))

// parse json
app.use(express.json())

app.get('/api/people' ,(req,res)=>{
    res.status(200).json({success : true , data : people});
})

app.post('/api/people' , (req,res)=>{
   const {name} =req.body
   if(!name){
    return res.status(400).json({success : false , msg : 'plz provide name value'})
   }
   res.status(201).send({success:true , person:name});
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    
    if(name){
        return res.status(200).send(`welcome ${name}`) 
    }
    res.status(401).send('please provide credentials')
    res.send('POST');
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name } = req.body
   
    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res 
         .status(400)
         .json({success : false , msg : 'please provide name value'})
    }
    const newPeople  = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success : true , data : newPeople})

})

app.listen(5000 , ()=>{
    console.log(`server is listening at http://localhost:5000`);
})

// Install postman api on the desktop to test api 

// 1.To construct a post request in a postman , go to the body in postman application and select raw as json becasuse we are sending json data 