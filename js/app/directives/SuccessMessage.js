function SuccessMessage(){
	return {
		replace: true,
		template: '<div class="success">Woohoo! Success!</div>'
	}
}

angular 
	.module('app')
	.directive('successMessage', SuccessMessage);