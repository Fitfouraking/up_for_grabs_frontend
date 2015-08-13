(function listingsControllerIIFE(){

  var listingsController = function(listingsFactory, loginFactory) {
    this.listing = {};
    this.listing.admin = undefined;
    this.listing.address = undefined;
    this.listing.email = undefined;
    this.listing.startDate = undefined;
    this.listing.price = undefined;
    this.listing.description = undefined;

    this.postListing = function() {
      listingsFactory.postListing(this.listing);
      }
    };

  listingsController.$inject = ['listingsFactory'];
  angular.module('housingApp').controller('listingsController', listingsController);

})();
