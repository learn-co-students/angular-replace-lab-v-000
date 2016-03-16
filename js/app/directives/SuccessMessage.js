function SuccessMessage() {
  return {
    replace: true,
    templateUrl: 'js/app/views/successMessage.html'
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)
