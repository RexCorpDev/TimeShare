var mongoose = require('mongoose');

var pAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};
var lAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};


var propertySchema = new mongoose.Schema({
  address         :   Object,
  // address      :  { type: { region: String, country: String, street: String, city: String, state: String, zip: Number}},
  price           :   { type: Number},
  customerRating  :   { type: Number},
  offers          :   { type: Number},
  status          :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
});

var Property = mongoose.model("Property", propertySchema);

module.exports = Property;
