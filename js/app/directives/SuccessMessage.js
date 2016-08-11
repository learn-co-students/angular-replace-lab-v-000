function SuccessMessage() {
	return {
    replace: true,
		templateUrl: 'js/app/templates/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
