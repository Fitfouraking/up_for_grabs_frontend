(function housingAppIIFE(){
  var app = angular.module('housingApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/auth/login',
            {
              controller: 'loginController',
              controllerAs: 'loginCtrl',
              templateUrl: 'app/views/login.html',

            }
           )
      .when('/auth/signup',
            {
              controller: 'signupController',
              controllerAs: 'signupCtrl',
              templateUrl: 'app/views/signup.html',

            }
           )
      .when('/home',
            {
              controller: 'userController',
              controllerAs: 'userCtrl',
              templateUrl: 'app/views/home.html',

            }
           )
      .otherwise({redirectTo: '/'});
  }).config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  }]);

})();
