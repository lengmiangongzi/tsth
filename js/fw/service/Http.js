/**
 *
 *  Defines `http` service which is a wrapper of `$http` service with few
 *  specified features
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, global) {
    'use strict';

    define(['lodash', 'angular'], function(_, angular) {

        var successHandler = function(httpHandler, httpResolver, deferred) {
            return function(data, status, headers, config) {
                var breaked = _.any(httpHandler.get('success'), function(handler) {
                    return !handler(data, status, headers, config);
                });
                if (!breaked) {
                    if (httpResolver.get()) {
                        httpResolver.get()(deferred, data, status, headers, config);
                    } else {
                        deferred.resolve({
                            data: data,
                            status: status,
                            headers: headers,
                            config: config
                        });
                    }
                }
            };
        };

        var errorHandler = function(httpHandler, deferred) {
            return function(data, status, headers, config) {
                var breaked = _.any(httpHandler.get('error'), function(handler) {
                    return !handler(data, status, headers, config);
                });
                if (!breaked) {
                    deferred.reject({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                }
            };
        };

        var wrapper = function(method, $q, $http, httpHandler, httpResolver) {

            return function() {
                var deferred = $q.defer();
                var promise = deferred.promise;
                var args = Array.prototype.slice.call(arguments, 0);
                var tmpPromise = $http[method].apply(undefined, args);
                tmpPromise.success(successHandler(httpHandler, httpResolver, deferred));
                tmpPromise.error(errorHandler(httpHandler, deferred));
                promise.success = function(fn) {
                    promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    });
                    return promise;
                };

                promise.error = function(fn) {
                    promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    });
                    return promise;
                };
                return promise;
            };
        };

        /**
         * Service definition
         *
         * @constructor
         */
        var definition = function(features, app) {

            var service = function($http, $q, httpHandler, httpResolver) {
                this.get = wrapper('get', $q, $http, httpHandler, httpResolver);
                this.post = wrapper('post', $q, $http, httpHandler, httpResolver);
                this.head = wrapper('head', $q, $http, httpHandler, httpResolver);
                this.put = wrapper('put', $q, $http, httpHandler, httpResolver);
                this.delete = wrapper('delete', $q, $http, httpHandler, httpResolver);
                this.patch = wrapper('patch', $q, $http, httpHandler, httpResolver);
            };

            var httpHandler = function() {
                var handlers = {
                    success: [],
                    error: []
                };

                this.push = function(handler, type) {
                    if (handler && angular.isFunction(handler) && handlers[type]) {
                        handlers[type].push(handler);
                    }
                };

                this.delete = function(handler, type) {
                    if (handlers[type]) {
                        _.remove(handlers[type], handler);
                    }

                };

                this.get = function(type) {
                    return handlers[type];
                };
            };

            var httpResolver = function() {

                var commonResolver;
                this.set = function(resolver) {
                    if (resolver && angular.isFunction(resolver)) {
                        commonResolver = resolver;
                    }
                };

                this.get = function() {
                    return commonResolver;
                };
            };

            app.service('http', ['$http', '$q', 'httpHandler', 'httpResolver', service]);
            app.service('httpHandler', [httpHandler]);
            app.service('httpResolver', [httpResolver]);
        };

        return {
            type: 'service',
            func: definition
        };
    });

}(define, window));
