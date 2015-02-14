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
    define(['lodash'], function(_) {

        /**
         * @constructor
         */
        var EmployController = function($scope) {


        };

        return ['$scope', EmployController];

    });

})(define, jQuery);
