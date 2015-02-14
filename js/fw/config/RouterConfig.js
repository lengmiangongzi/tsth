/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['lodash'], function(_) {

        var RouterConfig = function(features, app) {
            if (!features || features.length === 0) {
                console.warn('No features loaded');
                return;
            }

            //config router
            app.config(['$locationProvider', '$routeProvider', 'CONF',
                function($locationProvider, $routeProvider, CONF) {

                    //retrieve router from each feature
                    var routes = [];
                    _.each(features, function(feature) {
                        if (!feature.routes) {
                            return;
                        }
                        _.each(feature.routes, function(ro) {
                            routes.push(ro);
                        });
                    });

                    //config each router
                    _.each(routes, function(ro) {
                        $routeProvider
                            .when(ro.when, {
                                templateUrl: ro.templateUrl,
                                controller: ro.controller
                            });
                    });

                    //config default page
                    var defaultRouter = _.find(routes, {
                        'isDefault': true
                    });
                    if (defaultRouter) {
                        $routeProvider.otherwise({
                            redirectTo: function() {
                                return defaultRouter.when + '?lang=' + CONF.defaultLang;
                            }
                        });
                    }

                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: true
                    });

                }
            ]);
        };

        return {
            type: 'config',
            func: RouterConfig
        };

    });

}(define));
