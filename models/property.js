var mongoose = require('mongoose');

var pAddressSchema = {
  region: String, country: String, street: String, city: String, state: String, zip: Number
};

var propertySchema = new mongoose.Schema({
  address         :   pAddressSchema,
  // address      :  { type: { region: String, country: String, street: String, city: String, state: String, zip: Number}},
  listPrice       :   { type: Number},
  customerRating  :   { type: Number},
  marketPrice     :   { type: Number},
  status          :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
});

var Property = mongoose.model("Property", propertySchema);

module.exports = Property;
