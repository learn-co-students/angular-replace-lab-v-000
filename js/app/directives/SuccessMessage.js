angular.module('app')
  .directive('successMessage', SuccessMessage);

  function SuccessMessage(){
    return {
      replace: true,
      template: '<div>Woohoo! Success!</div>'
    }
  }