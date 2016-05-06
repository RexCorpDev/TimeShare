'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();

const MONGOURL = process.env.MONGODB_URL || 'mongodb://localhost/TimeShare';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {

  res.handle = (err, data) => {
    res.status(err ? 400 : 200).send(err || data);
  };
  next();
});

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));

mongoose.connect(MONGOURL, err => {
  console.log(err || `Connected to MongoDB @ ${MONGOURL}`);
});

app.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});

module.exports = router;
