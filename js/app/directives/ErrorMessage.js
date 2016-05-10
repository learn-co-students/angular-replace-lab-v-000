function errorMessage (){
  return {
    templateUrl: 'js/app/views/error.html',
    replace: true
  };
}

angular
  .module('app')
  .directive('errorMessage', errorMessage);
