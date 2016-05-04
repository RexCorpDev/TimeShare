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
      // customerRating  :   $scope.newRating.selected,
      // marketPrice     :   $scope.newOffer,
      // status          :   $scope.newStatus.selected,
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



app.controller('editCtrl', function ($scope, Client, Property, $state) {
  // //console.log("editController");
  // $scope.isCollapsed = true;
  //
  // Client.getClients()
  //   .then(dbClients => {
  //   //console.log("getClients\n",dbClients);
  //   $scope.cards = dbClients.data;
  // });
  //
  // $scope.sortBy = order => {
  //   if($scope.sortOrder === order){
  //     $scope.sortOrder = -order;
  //   } else {
  //     $scope.sortOrder = order;
  //   };
  // };
  //
  // $scope.editCard = card => {
  //   var editedCard = {};
  //   console.log("old Card\n", card);
  //   //console.log("edit card\n", card);
  //   $scope.isCollapsed = false;
  //   $scope.editCategory = card.category;
  //   $scope.editQuestion = card.question;
  //   $scope.editAnswer = card.answer;
  //   $scope.editDifficulty = card.difficulty;
  //
  //
  //   $scope.submitEdit = () => {
  //     console.log(card._id);
  //     editedCard = {
  //       _id        :   card._id,
  //       category  :   $scope.editCategory,
  //       question  :   $scope.editQuestion,
  //       answer    :   $scope.editAnswer,
  //       difficulty:   $scope.editDifficulty
  //     };
  //     console.log("new Card", editedCard);
  //
  //     Card.edit(editedCard);
  //     Card.getCards()
  //     .then(newCards => {
  //       console.log("here are the edited cards\n",newCards);
  //       $scope.cards = newCards.data;
  //     });
  //
  //
  //     $scope.editCategory = "";
  //     $scope.editQuestion = "";
  //     $scope.editAnswer = "";
  //     $scope.editDifficulty = "";
  //   }
  // }
  //
  // $scope.cancelChanges = () => {
  //   $scope.editCategory = "";
  //   $scope.editQuestion = "";
  //   $scope.editAnswer = "";
  //   $scope.editDifficulty = "";
  // }
  //
  // $scope.deleteCard = id => {
  //   Card.delete(id);
  //   Card.getCards()
  //   .then(newCards => {
  //     $scope.cards = newCards.data;
  //   });
  // };

});


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
