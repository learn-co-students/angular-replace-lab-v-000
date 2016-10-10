function SuccessMessage() {
  return {
    replace: true,
    template: [
              '<div>',
                  'Woohoo! Success!',
                '</div>'
              ].join('')
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)