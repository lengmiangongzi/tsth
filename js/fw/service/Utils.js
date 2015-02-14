/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, global) {
    'use strict';


    define(['angular'], function(angular) {


        var definition = function(features, app) {

            var utils = function($q, CONF) {

                this.base64ToString = function(str) {
                    return decodeURIComponent(escape(window.atob(str)));
                };

                this.stringTobase64 = function(str) {
                    return window.btoa(unescape(encodeURIComponent(str)));
                };

                this.httpDefer = function() {
                    var deferred = $q.defer();
                    var promise = deferred.promise;
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
                    return deferred;
                };

                this.formEncodedOpts = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    transformRequest: function(data, headersGetter) {
                        // If this is not an object, defer to native stringification.
                        if (!angular.isObject(data)) {
                            return (!data ? '' : data.toString());
                        }
                        var buffer = [];
                        // Serialize each key in the object.
                        for (var name in data) {
                            if (!data.hasOwnProperty(name)) {
                                continue;
                            }
                            var value = data[name];
                            buffer.push(
                                encodeURIComponent(name) +
                                "=" +
                                encodeURIComponent(!value ? '' : value)
                            );
                        }
                        // Serialize the buffer and clean it up for transportation.
                        return buffer
                            .join("&")
                            .replace(/%20/g, "+");
                    }
                };

                this.stopEvent = function(e) {
                    if (!e) {
                        return;
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                };

                this.getapi = function(app, path) {
                    if (!path) {
                        return global.getapi(CONF.backendname, app);
                    }
                    return global.getapi(app, path);
                };

            };
            app.service('utils', ['$q', 'CONF', utils]);
        };

        return {
            type: 'service',
            func: definition
        };

    });

}(define, window));
