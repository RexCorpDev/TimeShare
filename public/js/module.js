'use strict';

var app = angular.module('timeShareApp', [ 'ui.bootstrap', 'ui.router', 'oitozero.ngSweetAlert' ]);

app.config(function($stateProvider, $urlRouterProvider){

console.log("stateProvider");

  $stateProvider
  .state('home', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('properties', {
    url           : '/properties' ,
    templateUrl   : 'html/properties.html' ,
    controller    : 'propertiesCtrl'
  })
  .state('clients', {
    url           : '/clients' ,
    templateUrl   : 'html/clients.html' ,
    controller    : 'clientsCtrl'
  })
  .state('all', {
    url           : '/all' ,
    templateUrl   : 'html/all.html' ,
    controller    : 'allCtrl'
  })
  .state('addProperty', {
    url           : '/addProperty' ,
    templateUrl   : 'html/addProperty.html' ,
    controller    : 'addCtrl'
  })
  .state('editedProperty', {
    url           : '/editProperty' ,
    templateUrl   : 'html/editProperty.html' ,
    controller    : 'editPropertyCtrl'
  })
  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })


  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
})
