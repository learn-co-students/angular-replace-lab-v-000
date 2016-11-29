function ErrorMessage(){
  return {
    replace: true,
    template: '<div>Woohoo! Success!</div>'
  }
}

angular
  .module('app')
  .directive('successMessage', ErrorMessage);
