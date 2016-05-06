'use strict';

var mongoose = require('mongoose');


var clientSchema = new mongoose.Schema({
  name        :   { first: String, last: String},
  phone       :   { mobile: String, home: String, work: String},
  email       :   { type: String},
  signup      :   { type: String},
  status      :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
  tenure      :   { type: Number},
  personalAddress   :   {region: String, country: String, street: String, city: String, state: String, zip: Number},
  locationAddress   :   {region: String, country: String, street: String, city: String, state: String, zip: Number}
});

var Client = mongoose.model("Client", clientSchema);

module.exports = Client;
