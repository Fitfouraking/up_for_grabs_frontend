(function usersFactoryIIFE(){

  // Create a users factory
  var usersFactory = function($http, appSettings){

    var factory = {};
    factory.users = [];
    factory.user = {};

    factory.getUsers = function(){
      return $http.get( appSettings.url + '/api/users/all').success(function(response){
        angular.copy(response, factory.users);
      });
    };

    factory.getUser = function(userId){
      return  $http.get( appSettings.url + '/api/user/' + userId).success(function(response) {
        angular.copy(response, factory.user);
      });
    };

    return factory;
  }

  usersFactory.$inject = ['$http', 'appSettings'];

  angular.module('housingApp').factory('usersFactory', usersFactory);
})();
