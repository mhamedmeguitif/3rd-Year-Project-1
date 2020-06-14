
var express = require('express');
const ArticleRouter =  express.Router();
const mongoose =  require('mongoose');
const Article_Model =  require('../models/Article'); 
var authenticate = require('../authenticate');


ArticleRouter.route('/:conference')

.get((req , res , next) =>{
    Article_Model.find({}) 
    .then((Article)=>{
       res.statusCode = 200 ;  
       res.setHeader('Content-Type' ,'application/json');
       res.json(Article) 
    } , (err) => next(err))
    .catch((err)=> next(err));   
})
.post(authenticate.verifyUser, (req,res,next )=>{

    req.body.chercheurId = req.user._id ;
    req.body.ConferenceId = req.params.conference ; 

    Article_Model.create(req.body)
    .populate('ConferenceId' , 'chercheurId' , 'les_Auteur')
    .then((Article)=>{
    },(err) => next(err))
    .catch((err)=> next(err)); 
})

.put((req,res,next )=>{
    res.statusCode = 403 ; 
    res.end('PUT Operation not supported  on /conferences '); 
 })

.delete(authenticate.verifyUser,(req,res,next )=>{
    Article_Model.remove({})
    .then((resp)=>{
      res.statusCode = 200 ;  
      res.setHeader('Content-Type' ,'application/json');
      res.json(resp); 
     },(err) => next(err))
    .catch((err)=> next(err));
  });

  ConferencesRouter.route('/:conference/:Article')

  .get((req,res,next )=>{
    Article_Model.findById(req.params.Article)
    .then((Article)=>{
       res.statusCode = 200 ;  
       res.setHeader('Content-Type' ,'application/json');
       res.json(Article) 
    } , (err) => next(err))
    .catch((err)=> next(err)); 
})
.post((req,res,next )=>{
    res.statusCode = 403 ; 
    res.end('POST operation not supported on /conferences/Article '  );     
    }) 
.put(authenticate.verifyUser , (req,res,next )=>{
        Article_Model.findByIdAndUpdate(req.params.Article, {$set : req.body },{new : true})
        .then((Article)=>{
         res.statusCode = 200 ;  
         res.setHeader('Content-Type' ,'application/json');
         res.json(Article) 
         },(err) => next(err))
        .catch((err)=> next(err));
     })
     
.delete(authenticate.verifyUser , (req,res,next )=>{
       Article_Model.findByIdAndRemove(req.params.Article)
        .then((resp)=>{
           res.statusCode = 200 ;  
           res.setHeader('Content-Type' ,'application/json');
           res.json(resp); 
         },(err) => next(err))
         .catch((err)=> next(err));
     });
