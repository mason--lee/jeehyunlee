'use strict';

/**
 * @ngdoc overview
 * @name jeehyunWebApp
 * @description
 * # jeehyunWebApp
 *
 * Main module of the application.
 */
var myApp = angular.module('jeehyunWebApp', ['ngRoute', 'ngAnimate', 'snap', 'sticky']);

// Configure the routes
myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		// route for home page
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
			// activetab: 'home'
		})

		// route for about page
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController'
			// activetab: 'about'
		})

		//route for project page
		.when('/project', {
			templateUrl: 'views/project.html',
			controller: 'projectController'
			// activetab: 'project'
		})

		// route for contact page
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
			// activetab: 'contact'
		})

		.otherwise({redirectTo: '/'});

	// Use the HTML5 History API
	if(window.history && window.history.pushState) {
		$locationProvider.html5Mode(false);
	}
});

// myApp.directive('lazyLoad', function($timeout) {
// 	return {
// 		restrict: 'A',
// 		link:  function(scope, el, attrs) {
// 			$timeout(function() {
// 				$(el).lazyload({threshold: 200});
// 			}, 0)
// 		}
// 	}
// })
// 

myApp.controller('mainController', function($scope) {
	$scope.pageClass = "page-home";
});

myApp.controller('aboutController', function($scope) {
	$scope.pageClass = "page-about";
	$scope.profile = [
		{
			'title': 'Fashion Designer Jeehyun Lee',
			'image': 'images/profile.jpg',
			'alt': 'Jeehyun Lee Profile Picture'
		}
	];
});

myApp.controller('projectController', function($scope) {
	$scope.pageClass = "page-project";
	$scope.collections = [
							{shot: 'project-1', count: 1},
							{shot: 'project-2', count: 2},
							{shot: 'project-3', count: 3},
							{shot: 'project-4', count: 4},
							{shot: 'project-5', count: 5},
							{shot: 'project-6', count: 6},
							{shot: 'project-7', count: 7},
							{shot: 'project-8', count: 8},
							{shot: 'project-9', count: 9},
							{shot: 'project-10', count: 10},
							{shot: 'project-11', count: 11},
							{shot: 'project-12', count: 12},
							{shot: 'project-13', count: 13},
							{shot: 'project-14', count: 14},
							{shot: 'project-15', count: 15},
							{shot: 'project-16', count: 16}
						];
});

myApp.controller('contactController', function($scope) {
	$scope.pageClass = "page-contact";
});


