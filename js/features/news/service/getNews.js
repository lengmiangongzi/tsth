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
        var getNews = function($http, $rootScope) {
            $http.get('js/data.json').success(function(data) {
                $rootScope.newsContent = data.newsContent;
            });
        };
        //var getNews = function($http, $scope) {
        /*$http.get('js/data.json').success(function(data) {
            $scope.newsContent = data.newsContent;
            alert(111);*/
        //});
        //};
        //return ['$http', '$scope', getNews];
        return ['$http', '$rootScope', getNews];
        /**
         * @constructor
         */


        //return ['$scope', '$routeParams', '$location', '$http', NewsController];

    });

})(define, jQuery);
