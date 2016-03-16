function ErrorMessage() {
  return {
    replace: true,
    templateUrl: 'js/app/views/errorMessage.html'
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage )
