(function usersControllerIIFE(){

  var UsersController = function(usersFactory, appSettings){
    this.sortBy = "lastName";
    this.users =  usersFactory.users;
    this.user = usersFactory.user;
    this.appSettings = appSettings;

    function init(){
      // Init the users from the factory
      //this.users = usersFactory.getUsers();
      usersFactory.getUser();
    };

    init();

    };

 UsersController.$inject = ['usersFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('housingApp').controller('usersController', UsersController);

})();
