'use strict';

/**
 * @ngdoc function
 * @name ngSassPatternsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngSassPatternsApp
 */
angular.module('ngSassPatternsApp')
    .controller('MainCtrl', function($scope) {
        $scope.homeMsg = ' ';
        $scope.navigationItems = ['grid', 'typography','buttons', 'forms', 'icons', 'alerts', 'animations'];
        $scope.buttons = {
        	styles: ['default', 'flat','raised', 'circle'],
        	colors: ['positive','neutral','negative'],
        	sizes:  ['small',' medium','large']
        };
        $scope.alerts = ['info', 'error', 'warning', 'success'];

    });
