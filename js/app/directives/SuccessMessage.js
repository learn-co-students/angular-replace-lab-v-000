function SuccessMessage() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/app/directives/success.html'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);
