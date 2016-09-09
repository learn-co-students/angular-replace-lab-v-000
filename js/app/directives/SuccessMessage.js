function SuccessMessage() {
  return {
    replace: true, 
    templateUrl: 'success.html'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);
