function ErrorMessage(){
	return {
		replace: true,
		template: [
			'<div class="error">',
			'Oh no, an error occurred!',
			'</div>'
		].join("")
	}
}

angular 
	.module('app')
	.directive('errorMessage', ErrorMessage);