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
        var companyDirective = function() {

            // Return configured, directive instance

            return {
                restrict: 'E',
                templateUrl: 'js/features/info/directive/company.html',
                replace: true,


            };
        };

        // Publish the chSlick directive construction function
        return [companyDirective];

    });

})(define);
