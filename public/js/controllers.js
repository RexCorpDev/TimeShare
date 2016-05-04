'use strict';

var app = angular.module('timeShareApp');

app.controller('homeCtrl', function(){
  console.log("homeCtrl");
})

app.controller('propertiesCtrl', function($scope, $state, Property){
  console.log('propertiesCtrl');

  //$scope.<ARRAY> = [];
})

app.controller('clientsCtrl', function($scope, $state, Client){
  console.log('clientsCtrl');

  //$scope.<ARRAY> = [];
})

app.controller('allCtrl', function($scope, $state, Client, Property){
  console.log('allCtrl');

  //$scope.<ARRAY> = [];
});

app.controller('editCtrl', function($scope, $state, Client, Property){
  console.log('editCtrl');

  //$scope.<ARRAY> = [];
})


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
