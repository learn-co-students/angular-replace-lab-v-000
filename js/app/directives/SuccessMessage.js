angular.module('app')
  .directive('successMessage', function () {
    return {
      replace: true,
      template: '<div>Woohoo! Success!</div>'
    }
  })
