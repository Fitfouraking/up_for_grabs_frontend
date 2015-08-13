(function loginFactoryIIFE(){

  var loginFactory = function($http, $location, appSettings) {
    var factory = {};
    factory.currentUser = undefined;

    factory.postLogin = function(data) {
      var url = appSettings.url + "/auth/login";
      return $http.post(url, data).success(function(res) {
        factory.currentUser = res;
        $location.path('/dashboard');
      }).error(function(err) {
        console.log(err);
      });
    }
    return factory;
  };

  loginFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('housingApp').factory('loginFactory', loginFactory);

})();
