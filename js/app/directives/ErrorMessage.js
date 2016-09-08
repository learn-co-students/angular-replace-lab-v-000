app.directive('errorMessage', function(){
  return {
    replace: true,
    template: '<div>Oh no, an error occurred!</div>'
  }
})