function successMessage () {
  return {
    replace: true, 
    templateUrl: 'js/app/views/success.html'
  };
}

angular
  .module('app')
  .directive('successMessage', successMessage);