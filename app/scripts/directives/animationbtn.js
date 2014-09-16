'use strict';

/**
 * @ngdoc directive
 * @name ngSassPatternsApp.directive:animationBtn
 * @description
 * # animationBtn
 */
angular.module('ngSassPatternsApp')
    .directive('animationBtn', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
            	/* Bind click event on animation-btn directive*/
            	element.bind('click', function (e) {
        			loadAnimation(e.target)
            	});

            	/*Load animation from the title of the button */
	        	function loadAnimation(elem) {
	        	    var animationClass = 'animated ' + $(elem).text();
		            $(elem).addClass(animationClass).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		                $(elem).removeClass(animationClass);
		            });
		        }
            }
        };
    });
