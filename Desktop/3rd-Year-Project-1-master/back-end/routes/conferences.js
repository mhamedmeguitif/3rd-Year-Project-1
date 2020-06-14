
var express = require('express');
const ConferencesRouter =  express.Router();
const mongoose =  require('mongoose');
const Confer =  require('../models/conference'); 
var authenticate = require('../authenticate');
 

ConferencesRouter.route('/')
.get((req,res,next )=>{
    Confer.find({})
    .populate('Proprietaire_conference') 
    .then((conference)=>{
       res.statusCode = 200 ;  
       res.setHeader('Content-Type' ,'application/json');
       res.json(conference) 
    } , (err) => next(err))
    .catch((err)=> next(err)); 
})


.post(authenticate.verifyUser, (req,res,next )=>{

    req.body.Proprietaire_conference = req.user._id ;
     
    Confer.create(req.body)
    .then((conference)=>{
      Confer.findById(conference._id)
      .populate('Proprietaire_conference')
      .then((conference) =>{
         console.log('Conference created ',conference); 
         res.statusCode = 200 ;  
         res.setHeader('Content-Type' ,'application/json');
         res.json(conference) ;
      })
    } , (err) => next(err))
    .catch((err)=> next(err)); 
})

.put((req,res,next )=>{
   res.statusCode = 403 ; 
   res.end('PUT Operation not supported  on /conferences '); 
})

.delete(authenticate.verifyUser,(req,res,next )=>{
  Confer.remove({})
  .then((resp)=>{
    res.statusCode = 200 ;  
    res.setHeader('Content-Type' ,'application/json');
    res.json(resp); 
   },(err) => next(err))
  .catch((err)=> next(err));
});
 
/*parie2  */
ConferencesRouter.route('/:conference')

.get((req,res,next )=>{
    Confer.findById(req.params.conference)
    .then((conference)=>{
       res.statusCode = 200 ;  
       res.setHeader('Content-Type' ,'application/json');
       res.json(conference) 
    } , (err) => next(err))
    .catch((err)=> next(err)); 
})

.post((req,res,next )=>{
res.statusCode = 403 ; 
res.end('POST operation not supported on /conferences/  '+ req.params.conference  );     
})

.put(authenticate.verifyUser , (req,res,next )=>{
   Confer.findByIdAndUpdate(req.params.conference, {$set : req.body },{new : true})
   .then((conference)=>{
    res.statusCode = 200 ;  
    res.setHeader('Content-Type' ,'application/json');
    res.json(conference) 
    },(err) => next(err))
   .catch((err)=> next(err));

})

.delete(authenticate.verifyUser , (req,res,next )=>{
   Confer.findByIdAndRemove(req.params.conference)
   .then((resp)=>{
      res.statusCode = 200 ;  
      res.setHeader('Content-Type' ,'application/json');
      res.json(resp); 
    },(err) => next(err))
    .catch((err)=> next(err));
});
module.exports = ConferencesRouter ; 