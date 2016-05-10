function successMessage (){
  return {
    templateUrl: 'js/app/views/success.html',
    replace: true
  };
}

angular
  .module('app')
  .directive('successMessage', successMessage);
