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
        $scope.homeMsg = 'Sass Patterns!';

        $scope.loadAnimationBtn = function (event) {
        	console.log(event);
        	console.log(event.target);
            var animationClass = 'animated ' + $(element).text();

            $(element).addClass(animationClass).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(element).removeClass(animationClass);
            });

        };
    });
