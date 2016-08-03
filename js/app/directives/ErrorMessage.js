function ErrorMessage(){
	return {
		replace: true,
		templateUrl: 'js/app/views/error.html'
	}
}

angular.module('app')
			 .directive('errorMessage', ErrorMessage);