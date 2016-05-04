'use strict';

var mongoose = require('mongoose');

var pAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};
var lAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};

var clientSchema = new mongoose.Schema({
  name        :   { first: String, last: String},
  phone       :   { mobile: Number, home: Number, work: Number},
  email       :   { type: String},
  signup      :   { type: String},
  status      :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
  tenure      :   { type: Number},
  personalA   :   pAddressSchema,
  locationA   :   lAddressSchema
});

var Client = mongoose.model("Client", clientSchema);

module.exports = Client;
