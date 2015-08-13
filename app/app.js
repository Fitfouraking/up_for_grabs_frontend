(function housingAppIIFE(){
  var app = angular.module('housingApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'usersController',
              controllerAs: 'usersCtrl',
              templateUrl: 'app/views/welcome.html',

            }
           )
      .when('/login',
            {
              controller: 'loginController',
              controllerAs: 'loginCtrl',
              templateUrl: 'app/views/login.html',

            }
           )
      .when('/signup',
            {
              controller: 'signupController',
              controllerAs: 'signupCtrl',
              templateUrl: 'app/views/signup.html',

            }
           )
      .when('/home',
            {
              controller: 'usersController',
              controllerAs: 'usersCtrl',
              templateUrl: 'app/views/signupLanding.html',

            }
           )
      .when('/listing/new',
            {
              controller: 'listingsController',
              controllerAs: 'listingsCtrl',
              templateUrl: 'app/views/newListing.html',

            }
           )
      .when('/dashboard',
            {
              controller: 'listingsController',
              controllerAs: 'listingsCtrl',
              templateUrl: 'app/views/dashboard.html',

            }
           )
      .otherwise({redirectTo: '/'});
  }).config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  }]);

})();
