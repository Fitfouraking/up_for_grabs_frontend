(function listingsFactoryIIFE(){

  // Create a listings factory
  var listingsFactory = function($http, $location, appSettings){

    var factory = {};
    factory.listings = [];
    factory.listing = {};

    factory.getListings = function(){
      return $http.get( appSettings.url + '/listings/all').success(function(response){
        angular.copy(response, factory.listings);
      });
    };

    factory.getListing = function(listingId){
      return  $http.get( appSettings.url + '/listing/' + listingId).success(function(response) {
        angular.copy(response, factory.listing);
      });
    };

    factory.postListing = function(data) {
      var url = appSettings.url + "/api/listing";
      return $http.post(url, data).success(function(res) {
        console.log(res);
        $location.path('/dashboard');
      }).error(function(err) {
        console.log(err);
      });
    };

    return factory;
  }

  listingsFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('housingApp').factory('listingsFactory', listingsFactory);
})();
