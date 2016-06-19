function ErrorMessage(){
  return {
    replace: false,
    template: "<div>Oh no, an error occurred!</div>"
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);