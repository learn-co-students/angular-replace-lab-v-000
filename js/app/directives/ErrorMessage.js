function ErrorMessage() {
  return {
    replace: true, 
    templateUrl: 'error.html'
  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
