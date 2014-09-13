'use strict';

/**
 * @ngdoc overview
 * @name jeehyunWebApp
 * @description
 * # jeehyunWebApp
 *
 * Main module of the application.
 */
var myApp = angular.module('jeehyunWebApp', ['ngRoute', 'ngAnimate']);

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

myApp.controller('mainController', function($scope) {
	$scope.pageClass = "page-home";
});

myApp.controller('aboutController', function($scope) {
	$scope.profile = [
		{
			'title': 'Fashion Designer Jeehyun Lee',
			'image': 'images/profile.jpg',
			'alt': 'Jeehyun Lee Profile Picture'
		}
	];

	$scope.pageClass = "page-about";
});

myApp.controller('projectController', function($scope) {
	$scope.pageClass = "page-about";
});

myApp.controller('contactController', function($scope) {
	$scope.pageClass = "page-contact";
});

