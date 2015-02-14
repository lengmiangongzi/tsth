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
        var InfoController = function($scope, $routeParams, $location) {
            $scope.tag = $routeParams.tag;
            $scope.toCompany = function() {
                $scope.tag = 'company';
                $location.url('info/company');
            };
            $scope.toTeam = function() {
                $scope.tag = 'team';
                $location.url('info/team');
            };

        };

        return ['$scope', '$routeParams', '$location', InfoController];

    });

})(define, jQuery);
