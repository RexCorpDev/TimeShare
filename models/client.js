'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Property = require('./property');

var clientSchema = new mongoose.Schema({
  name        :   { first: String, last: String},
  phone       :   { mobile: String, home: String, work: String},
  email       :   { type: String},
  signup      :   { type: String},
  status      :   { type: String, enum: ['active', 'inactive', 'rejected', 'seeking']},
  tenure      :   { type: Number},
  personalAddress   :   {region: String, country: String, street: String, city: String, state: String, zip: Number},
  locationAddress   :   {region: String, country: String, street: String, city: String, state: String, zip: Number},
  property         : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client'}]
});

clientSchema.statics.moveIn = function(clientId, propertyId, cb) {
  if(clientId === propertyId){
    return cb({error: "Duplicate ID's"})
  }
  Client.findById(clientId, (errClient, client) => {
    Property.findById(propertyId, (errProperty, property) => {
      console.log("property FOUND=\n", property);
      if(errClient || errProperty) return cb( errClient || errProperty );

      var clientHasProperty = client.property.indexOf(property._id) != -1;
      var PropertyHasClient = property.property.indexOf(client._id) != -1;

      if(clientHasProperty || PropertyHasClient) {
        return cb({ error: "Client Already Owns this TimeShare!" });
      }
      console.log('client=\n',client);
      client.property.push(property._id);
      console.log('client=\n',client);
      console.log('//////////////////////////');
      console.log('property=\n',property);
      property.client.push(client._id);
      console.log('property=\n',property);

      client.save((errProperty) => {
        property.save((errClient) => {
          cb(errProperty || errClient);
        });
      });
    });
  });
};


var Client = mongoose.model("Client", clientSchema);

module.exports = Client;
