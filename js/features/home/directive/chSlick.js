/*
 *  @author      Jinzhen.Zhu
 *  @copyright   Dec 31, 2014
 *
 *
 */
(function(define) {
    "use strict";

    /**
     * Register the chslick construction function with RequireJS
     *
     */
    define(['slick'], function(slick) {
        /**
         * Construction function
         * Does not need any AngularJS DI
         *
         * @constructor
         */
        var chSlick = function() {

            // Return configured, directive instance

            return {
                restrict: 'A',
                scope: {
                    'options': '='
                },
                link: function($scope, element, attrs) {
                    element.slick($scope.options);

                    $scope.$on('$destroy', function() {
                        element.unslick();
                    });
                }
            };
        };

        // Publish the chSlick directive construction function
        return [chSlick];

    });

})(define);
