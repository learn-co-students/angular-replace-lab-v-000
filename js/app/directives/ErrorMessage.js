function ErrorMessage() {
  return {
     replace: true,
     template: '<div>Oh no, an error occurred!</div>'
     // templateUrl: '/js/app/directives/views/ErrorMessage.html'
  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
