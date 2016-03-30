function successMessage() {
  return {
    replace: true,
    template: '<div>Woohoo! Success!</div>'
  };
}

angular
  .module('app')
  .directive('successMessage', successMessage);
