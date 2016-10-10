function ErrorMessage () {
  return {
    replace: true,
    template: [
                '<div>',
                  'Oh no, an error occurred!',
                '</div>'
              ].join('')
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage)