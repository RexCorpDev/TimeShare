'use strict';

var app = angular.module('timeShareApp');

app.service('Client', function($http, $q){

  this.getClientsByCategory = category => {
    return $http.get('/api/clients', category);
  };

  this.getClientById = id => {
    console.log("ClientById\n", id);
    return $http.get('api/clients', id);
  };

  this.getClients = () => {
    return $http.get('/api/clients')
  };

  this.create = newClient => {
    console.log("Service new client\n", newClient);
    return $http.post('/api/clients', newClient);
  };

  this.delete = id => {
    console.log("Delete this:\n", id);
    return $http.delete(`/api/clients/${id}`);
  };

  this.edit = editedClient => {
    console.log("Edit this:\n",editedClient);
    return $http.put(`/api/clients/${editedClient._id}`, editedCard);
  }
});
