var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Client = require('./client');

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
  garage          :   { type: Number},
  client          :   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }]
});

propertySchema.statics.assign = function(propertyId, clientId, cb) {
  if(propertyId === clientId){
    return cb({error: "Duplicate ID's"})
  }
  Property.findById(propertyId, (errProperty, property) => {
    Client.findById(clientId, (errClient, client) => {
      //console.log("client FOUND=\n", client);
      if(errClient || errProperty) return cb( errClient || errProperty );

      var propertyHasClient = property.client.indexOf(client._id) != -1;
      var clientHasProperty = client.property.indexOf(property._id) != -1;

      if(propertyHasClient || clientHasProperty) {
        return cb({ error: "Client Already Owns this TimeShare!" });
      }
      //console.log('property=\n',property);
      property.client.push(client._id);
      //console.log('property=\n',property);
      //console.log('//////////////////////////');
      //console.log('client=\n',client);
      client.property.push(property._id);
      //console.log('client=\n',client);

      property.save((errProperty) => {
        client.save((errClient) => {
          cb(errClient || errProperty);
        });
      });
    });
  });
};

// propertySchema.statics.remove = function(propertyId, clientId, cb) {
//   if(propertyId === clientId){
//     return cb({error: "Dubplicate ID's"})
//   }
//
// }


var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
