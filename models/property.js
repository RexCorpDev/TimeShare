var mongoose = require('mongoose');


var propertySchema = new mongoose.Schema({
  address         :   {
      region: String,
      country: String,
      street: String,
      city: String,
      state: String,
      zip: Number
    },
  listPrice       :   { type: Number},
  customerRating  :   { type: String, enum: ['$','$$','$$$','$$$$','$$$$$','$$$$$$$']},
  marketPrice     :   { type: Number},
  status          :   { type: String, enum: ['Listed', 'Purchased', 'Low Interest', 'High Interest', 'Special Interest']},
  squareFreet     :   { type: Number},
  rooms           :   { type: Number},
  baths           :   { type: Number},
  garage          :   { type: Number}
});

var Property = mongoose.model("Property", propertySchema);

module.exports = Property;
