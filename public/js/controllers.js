'use strict';

var app = angular.module('timeShareApp');

app.controller('homeCtrl', function(){
  console.log("homeCtrl");
})

app.controller('propertiesCtrl', function($scope, $state, Property){
  console.log('propertiesCtrl');

  Property.getProperties()
  .then(dbProperties => {
    console.log(dbProperties);
    $scope.properties = dbProperties.data;
  });

  $scope.deleteProperty = id => {
    Property.delete(id);
    Property.getProperties()
    .then(newProperties => {
      $scope.properties = newProperties.data;
    });
  };

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };
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

//  CRUD controllers
app.controller('addCtrl', function($scope, Property, Client, $state){

  $scope.createProperty = () => {
    var newProperty = {
      address         :   {
        region    : $scope.newRegion.selected,
        country   : $scope.newCountry,
        city      : $scope.newCity,
        state     : $scope.newState,
        street    : $scope.newStreet,
        zip       : $scope.newZip
      },
      listPrice       :   $scope.listPrice,
      customerRating  :   $scope.newRating.selected,
      marketPrice     :   $scope.marketPrice,
      status          :   $scope.newStatus.selected,
    };

    console.log("controllerNewProperty",newProperty);
    Property.create(newProperty);

    $scope.difficulty.selected = "";
    $scope.category.selected = "";
    $scope.question = "";
    $scope.answer = "";
  };
  $scope.newRegion = {
    address: [
      'North America',
      'Central America',
      'South America',
      'Europe',
      'Scandanavia',
      'Middle East',
      'Asia'
    ],
    selected: 'North America'
  };

  $scope.newRating = {
    rate: [
      '$',
      '$$',
      '$$$',
      '$$$$',
      '$$$$$',
      '$$$$$$$'

    ],
    selected: '$'
  };

  $scope.newStatus = {
    status: [
      'Listed',
      'Purchased',
      'Low Interest',
      'High Interest',
      'Special Interest'
    ],
    selected: 'Listed'
  };


  // ---  CLIENT --- //


  $scope.createClient = () => {
    var newClient = {
      difficulty  :   $scope.difficulty.selected,
      category    :   $scope.category.selected,
      question    :   $scope.question,
      answer      :   $scope.answer,
    };

    console.log("controllerNewClient",newClient);
    Client.create(newClient);
    $scope.difficulty.selected = "";
    $scope.category.selected = "";
    $scope.question = "";
    $scope.answer = "";
  };
  $scope.category = {
    options: [
      'Movie',
      'Music',
      'Number',
      'Random'
    ],
    selected: 'Movie'
  };
  $scope.difficulty = {
    options: [
      'Easy',
      'Medium',
      'Hard',
      'Very Hard'
    ],
    selected: 'Easy'
  };
});



app.controller('editPropertyCtrl', function ($scope, Property, $state) {
  console.log("editPropertyController");

  var propertyToEdit = property;

  $scope.id           = propertyToEdit.id;
  $scope.country      = propertyToEdit.country;
  $scope.city         = propertyToEdit.city;
  $scope.state        = propertyToEdit.state;
  $scope.zip          = propertyToEdit.listPrice;
  $scope.listPrice    = propertyToEdit.marketPrice;


  $scope.submitEdit = () => {
    submitProperty = {
      _id             =$scope.id,
      newCountry      =$scope.country,
      newCity         =$scope.city,
      newState        =$scope.state,       
      newZip          =$scope.zip,
      newListPrice    =$scope.listPrice
    }
    console.log("submit Property", submitProperty);

    Property.edit(submitProperty);
    Property.getProperties()
    .then(newProperties => {
      console.log("here are the edited properties\n",newProperties);
      $scope.editStatus = "Change Complete!";
    });

    $scope.id           = "";
    $scope.country      = "";
    $scope.city         = "";
    $scope.state        = "";
    $scope.zip          = "";
    $scope.listPrice    = "";
  }
}

$scope.cancelChanges = () => {
  $scope.id           = "";
  $scope.country      = "";
  $scope.city         = "";
  $scope.state        = "";
  $scope.zip          = "";
  $scope.listPrice    = "";
  $scope.editStatus = "Change Canceled!";
}

});


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
