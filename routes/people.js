// ROUTER in express.js

const express = require('express')
const router  = express.Router();

let {people} = require('../data');





router.post('/login',(req,res)=>{
    const {name} = req.body;
    
    if(name){
        return res.status(200).send(`welcome ${name}`) 
    }
    res.status(401).send('please provide credentials')
    res.send('POST');
})

router.get('/' ,(req,res)=>{
    res.status(200).json({success : true , data : people});
})

router.post('/' , (req,res)=>{
   const {name} =req.body
   if(!name){
    return res.status(400).json({success : false , msg : 'plz provide name value'})
   }
   res.status(201).send({success:true , person:name});
})



router.put('/api/people/:id',(req,res)=>{
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

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    people = newPeople; // update the main data

    res.status(200).json({ success: true, data: people });
});

module.exports = router