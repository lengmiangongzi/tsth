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
    define([], function() {
        /**
         * Construction function
         * Does not need any AngularJS DI
         *
         * @constructor
         */
        var teamDirective = function() {

            // Return configured, directive instance

            return {
                restrict: 'E',
                templateUrl: 'js/features/info/directive/team.html',
                replace: true,


            };
        };

        // Publish the chSlick directive construction function
        return [teamDirective];

    });

})(define);
