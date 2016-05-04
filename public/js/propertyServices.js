'use strict';

var app = angular.module('timeShareApp');

app.service('Property', function($http, $q){

  this.getPropertysByCategory = category => {
    return $http.get('/api/properties', category);
  };

  this.getPropertyById = id => {
    console.log("PropertyById\n", id);
    return $http.get('api/properties', id);
  };

  this.getPropertys = () => {
    return $http.get('/api/properties')
  };

  this.create = newProperty => {
    console.log("Service new property \n", newProperty);
    return $http.post('/api/properties', newProperty);
  };

  this.delete = id => {
    console.log("Delete this:\n", id);
    return $http.delete(`/api/properties/${id}`);
  };

  this.edit = editedProperty => {
    console.log("Edit this:\n",editedProperty);
    return $http.put(`/api/properties/${editedProperty._id}`, editedCard);
  }
});
