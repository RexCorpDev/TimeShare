'use strict';

var express = require('express');
var router = express.Router();
var Property = require('../models/property');

router.get('/', (req, res) => {
  console.log('GET /api/properties')
  Property.find({}, (err, properties)=> {
    if(err){
      res.status(400).send(err);
    }
    else {
      res.send(properties);
    };
  });
});

router.get('/:id', (req, res) => {
  console.log("@services.js")
  console.log(req.params.id);
  Property.findById(req.params.id, (err, property) => {
    if(err){
      console.log("err");
      res.status(400).send(err);
    } else {
      console.log('from Mongo ', property);
      res.send(property);
    }
  });
});

router.post('/', (req, res) => {
  console.log('sendThisProperty\n',req.body);
  Property.create(req.body, (err, savedProperty)=>{
    if(err){
      res.status(404).send(err);
    } else {
      console.log("Saved the Property!");
      res.send(savedProperty);
    }
  });
});

router.delete('/:id', (req, res) => {
  Property.findByIdAndRemove(req.params.id, err => {
    if(err){
      res.status(400).send(err);
    } else {
      res.send("Deleted!");
    }
  });
});

router.put('/:id', (req, res) => {
  console.log('reqBody =>\n', req.body);
  Property.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, (err, property) => {
    console.log("PROP", property)
    if(err){
      res.status(400).send(err);
    } else {
      res.send(property);
    }
  });
});


//
//
//
// router.get('/:category', (req, res) => {
//   console.log(req.params.category);
//   Property.find(req.params.category, (err, property) =>{
//     if(err){
//       res.status(400).send(err);
//     } else {
//       res.send(property);
//     }
//   });
// });
//





module.exports = router;
