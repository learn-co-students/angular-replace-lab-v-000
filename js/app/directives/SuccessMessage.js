function SuccessMessage() {
  return {
    replace: true,
    template: '<div>Woohoo! Success!</div>'
  }
}

angular
  .app('app', [])
  .directive('successMessage', SuccessMessage);
