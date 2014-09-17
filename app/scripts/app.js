'use strict';

/**
 * @ngdoc overview
 * @name ngSassPatternsApp
 * @description
 * # ngSassPatternsApp
 *
 * Main module of the application.
 */
angular
    .module('ngSassPatternsApp',[
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'sticky'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home').when('/', '/home').otherwise('404');

        $stateProvider
	        .state('home', {
	            url: '/home',
	            templateUrl: 'views/home.html',
	            controller: 'MainCtrl'
	        })
            .state('grid', {
                url: '/grid',
                templateUrl: 'views/grid.html',
            })
            .state('typography', {
                url: '/typography',
                templateUrl: 'views/typography.html',
            })
            .state('buttons', {
                url: '/buttons',
                templateUrl: 'views/buttons.html',
            })
            .state('forms', {
                url: '/forms',
                templateUrl: 'views/forms.html',
            })
            .state('icons', {
                url: '/icons',
                templateUrl: 'views/icons.html',
            })
            .state('alerts', {
                url: '/alerts',
                templateUrl: 'views/alerts.html',
            })
            .state('animations', {
                url: '/animations',
                templateUrl: 'views/animations.html',
                controller: 'MainCtrl'
            })
            .state('404', {
            	url: '/404',
                templateUrl: 'views/404.html',
			});

        /* When you have html5Mode enabled, the # character will no longer be used in your urls. The # symbol is useful because it requires no server side configuration. Without #, the url looks much nicer, but it also requires server side rewrites. */
        // $locationProvider.html5Mode(true);
    });
