angular.module('app')
  .directive('errorMessage', ErrorMessage);

  function ErrorMessage(){
    return {
      replace: true,
      template: '<div>Oh no, an error occurred!</div>'
    }
  }