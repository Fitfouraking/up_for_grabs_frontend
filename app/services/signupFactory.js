(function signupFactoryIIFE(){

  var signupFactory = function($http, $location, appSettings) {
    var factory = {};

    factory.postSignup = function(data) {
      var url = appSettings.url + "/auth/signup";
      return $http.post(url, data).success(function(res) {
        console.log(res);
        $location.path('/home');
      }).error(function(err) {
        console.log(err);
      });
    };
    return factory;
  };

  signupFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('housingApp').factory('signupFactory', signupFactory);

})();

