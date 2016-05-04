'use strict';

var app = angular.module('<NAME>');

app.controller('homeCtrl', function(){
  console.log("homeCtrl");
})

app.controller('alphaCtrl', function($scope, $state, <SERVICE NAME>){
  console.log('alphaCtrl');

  //$scope.<ARRAY> = [];

})


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
