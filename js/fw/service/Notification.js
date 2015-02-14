/**
 *
 *  Defines `notification` service which helps developer
 *  control notifications
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    var EVENT_NOTIFICATION_ADDED = 'notification.added';

    define(['angular'], function(angular) {


        var definition = function(features, app) {

            var notification = function($rootScope) {
                var factory = {};
                var listeners = {};

                factory.push = function(note) {
                    if (!note) {
                        return;
                    }
                    $rootScope.$broadcast(EVENT_NOTIFICATION_ADDED, note);
                };

                factory.on = function(category, callback) {
                    if (!listeners[category]) {
                        listeners[category] = [];
                    }
                    if (angular.isFunction(callback)) {
                        listeners[category].push(callback);
                    }
                };

                $rootScope.$on(EVENT_NOTIFICATION_ADDED, function(event, data) {
                    if (listeners[data.category]) {
                        _.each(listeners[data.category], function(listener) {
                            listener(data);
                        });
                    }
                });

                return factory;
            };
            app.factory('notify', ['$rootScope', notification]);
        };

        return {
            type: 'service',
            func: definition
        };

    });

}(define));
