function SuccessMessage() {
  return {
     replace: true,
     template: '<div>Woohoo! Success!</div>'
     // templateUrl: '/js/app/directives/views/SuccessMessage.html'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);
