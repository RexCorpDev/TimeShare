'use strict';

var app = angular.module('<NAME>', [ 'ui.bootstrap', 'ui-bootstrap', 'oitozero.ngSweetAlert' ]);

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider
  .state('<STATE NAME>', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : '<CONTROLLER NAME>'
  })
  // .state('<STATE NAME>', {
  //   url           : '/<STATE NAME>' ,
  //   templateUrl   : 'html/<STATE TEMPLATE>.html' ,
  //   controller    : '<CONTROLLER NAME>'
  // })
  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })








  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
})
