/**
 *  Defines the HomeController controller
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, $) {
    'use strict';

    /**
     * Register the HomeController class with RequireJS
     */
    define(['lodash', 'highcharts'], function(_) {

        /**
         * @constructor
         */
        var ProductController = function($scope) {
            $scope.titleTag = function() {
                $scope.proTag = 1111;
            };
            //$scope.proTag = true;
        };
        return ['$scope', ProductController];

    });

})(define, jQuery);
