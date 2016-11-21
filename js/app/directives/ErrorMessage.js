function ErrorMessage() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'js/app/directives/error.html'
  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
