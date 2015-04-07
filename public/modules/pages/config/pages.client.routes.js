angular.module('pages').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('listPages', {
			url: '/pages',
			templateUrl: 'modules/pages/views/pages.client.view.html'
		});
	}
]);