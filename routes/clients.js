'use strict';

var express = require('express');
var router = express.Router();
var Client = require('../models/client');




router.get('/', (req, res) => {
  Client.find({}, (err, clients)=> {
    if(err){
      res.status(400).send(err);
    }
    else {
      res.send(clients);
    };
  });
});

router.get('/:id', (req, res) => {
  Client.findById(req.params.id, (err, client) =>{
    if(err){
      res.status(400).send(err);
    } else {
      res.send(client);
    }
  });
});

router.post('/', (req, res) => {
  console.log('sendThisClient\n',req.body);
  Client.create(req.body, (err, savedClient)=>{
    if(err){
      res.status(404).send(err);
    } else {
      console.log("Saved the Client!");
      res.send(savedClient);
    }
  });
});

router.delete('/:id', (req, res) => {
  Client.findByIdAndRemove(req.params.id, err => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send("Deleted!");
    }
  });
});

router.put('/:id', (req, res) => {
  console.log('reqBody =>\n', req.body);
  Client.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, (err, client) => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send(client);
    }
  });
});





router.get('/:category', (req, res) => {
  console.log(req.params.category);
  Client.find(req.params.category, (err, client) =>{
    if(err){
      res.status(400).send(err);
    } else {
      res.send(client);
    }
  });
});






module.exports = router;
