function SuccessMessage() {
  return {
    template: '<div>Woohoo! Success!</div>',
    replace: true
  };
}

angular
.module('app')
.directive('successMessage', SuccessMessage);
