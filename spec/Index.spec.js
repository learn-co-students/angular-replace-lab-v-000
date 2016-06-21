var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should render the success message and replace the directive', function() {
		expect(element(by.css('.success')).getText()).toBe('Woohoo! Success!');

		expect(element(by.css('success-message')).isPresent()).toEqual(false);
	});

	it('should render the error message and replace the directive', function() {
		expect(element(by.css('.error')).getText()).toBe('Oh no, an error occurred!');

		expect(element(by.css('success-message')).isPresent()).toEqual(false);
	});
});