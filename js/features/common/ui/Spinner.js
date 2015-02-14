/**
 *  Defines the Spinner
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, require) {
    'use strict';

    var spinnerHtml = '<div class="mall-spinner"></div>';
    var cubeGridHtml = $(spinnerHtml).append('<div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div>');
    var spinoffPulse = $(spinnerHtml).append('<div class="circle"></div><div class="circle1"></div>');
    var spinoff = $(spinnerHtml).append('<div class="ball"></div><div class="ball1"></div>');

    define(['angular'], function(angular) {

        var moduleName = 'ngSpinner';

        var common = angular.module(moduleName, []);

        var dir = function() {

            return {
                restrict: 'A',
                scope: {
                    options: '='
                },
                link: function($scope, element, attributes) {

                    $scope.$watch('options.isLoading', function(newValue) {
                        if (newValue) {
                            switch ($scope.options.theme) {
                                case 'cube-grid':
                                    element.append(cubeGridHtml);
                                    element.find('.mall-spinner').addClass($scope.options.theme);
                                    break;
                                case 'audio-wave':
                                    element.append(spinnerHtml);
                                    element.find('.mall-spinner').addClass($scope.options.theme);
                                    break;
                                case 'spinoff-pulse':
                                    element.append(spinoffPulse);
                                    element.find('.mall-spinner').addClass($scope.options.theme);
                                    break;
                                case 'spinoff':
                                    element.append(spinoff);
                                    element.find('.mall-spinner').addClass($scope.options.theme);
                                    break;
                            }
                        } else {
                            element.find('.mall-spinner').remove();
                        }
                    }, true);
                }
            };
        };

        common.directive('ngSpinner', [dir]);

        return {
            type: 'feature',
            name: moduleName
        };

    });

})(define, require);
