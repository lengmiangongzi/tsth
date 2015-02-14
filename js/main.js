/**
 *  main.js is responsible for the organization of features and cache control.
 *
 *  @author  Hao.Zuo
 *  @date    Nov 24th, 2014
 */
(function(define, doc) {
    'use strict';

    define([
        'lodash',
        'angular',
        'ext/main',
        'config/main',
        'service/main',
        'features/main',
        'splash',
        'css!business/css/main'
    ], function(_, angular, ext, config, service, features, splash) {

        var appName = 'mom';

        var depends = _.pluck(ext.modules, 'name');

        Array.prototype.push.apply(depends, _.pluck(features, 'name'));

        /**
         * Launch application in manual way
         */
        var app = angular.module(appName, depends);
        // execute each config module
        _.each(config, function(c) {
            c.func(features, app);
        });

        //register each service on app
        _.each(service, function(s) {
            s.func(features, app);
        });

        // destroy splash
        splash.destroy();

        angular.bootstrap(doc, [appName]);

        return app;
    });

}(define, document));
