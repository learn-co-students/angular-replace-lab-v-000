function errorMessage () {
  return {
    replace: true, 
    templateUrl: 'js/app/views/error.html' 
  };
}

angular  
  .module('app')
  .directive('errorMessage', errorMessage);