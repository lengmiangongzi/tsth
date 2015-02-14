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
        var InfoController = function($scope) {
            var longitude = 121.497775;
            var latitude = 31.237727;
            $scope.showImage = true;
            $scope.map = {
                center: {
                    longitude: longitude,
                    latitude: latitude
                },
                zoom: 17,
                width: '966px',
                height: '400px',
                markers: [{
                    longitude: longitude,
                    latitude: latitude,
                    width: 302,
                    height: 70,
                    icon: 'img/contact/mapIcon.png',
                    title: '万向大夏',
                    content: '陆家嘴西路99号  上海浦东'
                }],
                onloaded: function() {
                    $scope.showImage = false;
                }
            };
            // $scope.$on('$destroy', function() {});
        };

        return ['$scope', InfoController];

    });

})(define, jQuery);
