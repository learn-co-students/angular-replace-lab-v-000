function ErrorMessage() {
  return {
    template: '<div>Oh no, an error occurred!</div>',
    replace: true

  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
