(function signupControllerIIFE(){

  var signupController = function(signupFactory) {
    this.signup = {};
    this.signup.username = undefined;
    this.signup.password = undefined;
    this.signup.email = undefined;
    this.signup.firstName = undefined;
    this.signup.lastName = undefined;

    this.postSignup = function() {
      // console.log(this.signup);
      if (this.signup.password && this.signup.username) {
        signupFactory.postSignup(this.signup);
      }else {
        this.message = "Please complete all input fields to register.";
      }
    };
  }

  signupController.$inject = ['signupFactory'];
  angular.module('housingApp').controller('signupController', signupController);

})();
