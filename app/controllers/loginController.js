(function loginControllerIIFE(){

  var loginController = function(loginFactory) {
    this.login = {};
    this.login.username = undefined;
    this.login.password = undefined;

    this.postLogin = function() {
      if (this.login.password && this.login.username) {
        loginFactory.postLogin(this.login);
      }else {
        this.message = "Please complete all input fields to login.";
      }
    };
  }

  loginController.$inject = ['loginFactory'];
  angular.module('housingApp').controller('loginController', loginController);

})();
