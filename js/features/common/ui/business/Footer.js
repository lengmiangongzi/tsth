/**
 *  Defines the Footer
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    var features = require.toUrl('features');

    define(['angular'], function(angular, globalFooter) {
        $('body').append('<ng-footer id="footer"></ng-footer>');

        var moduleName = 'Footer';

        var common = angular.module(moduleName, []);

        var dir = function() {
            return {
                restrict: 'E',
                scope: {},
                link: function($scope, element, attrs) {;

                },
                templateUrl: features + '/common/ui/business/Footer.html'
            };
        };

        common.directive('ngFooter', [dir]);

        return {
            type: 'feature',
            name: moduleName,
            lang: {
                zh: {},
                en: {}
            }
        };

    });

})(define);
