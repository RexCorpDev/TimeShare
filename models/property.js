var mongoose = require('mongoose');

var pAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};
var lAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};
var ratingSchema = {

}

var propertySchema = new mongoose.Schema({
  address         :  lAddressSchema,
  price           :   { type: Number},
  customerRating  :   { type: Number},
  offers          :   { type: Number},
  status          :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
});

module.exports = Client;
