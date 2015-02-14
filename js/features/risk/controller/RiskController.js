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
        var RiskController = function($scope, $routeParams, $location) {
            $scope.riskTag = $routeParams.riskTag;

            $scope.toRule = function() {
                $scope.riskTag = 'rule';
                $location.url('risk/rule');
            };
            $scope.toStratge = function() {
                $scope.riskTag = 'stratge';
                $location.url('risk/stratge');
            };
            $scope.toRisk = function() {
                $scope.riskTag = 'risk';
                $location.url('risk/risk');
            };
        };

        return ['$scope', '$routeParams', '$location', RiskController];

    });

})(define, jQuery);
