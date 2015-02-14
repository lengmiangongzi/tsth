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
        var NewsController = function($scope, $routeParams, $location, $http) {
            //alert(1111);
            $scope.newsTag = $routeParams.newsTag;
            $scope.companyNews = function() {
                $scope.newsTag = 'companyNews';
                $location.url('news/companyNews');
            };

            $scope.industryNews = function() {
                //alert('2');
                $scope.newsTag = 'industryNews';
                $location.url('news/industryNews');
            };


        };

        return ['$scope', '$routeParams', '$location', '$http', NewsController];

    });

})(define, jQuery);
