function ErrorMessage() {
	return {
    replace: true,
		templateUrl: 'js/app/templates/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
