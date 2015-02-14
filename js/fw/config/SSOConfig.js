/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var SSOConfig = function(features, app) {

            var sso = function($httpProvider) {
                $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
                $httpProvider.defaults.withCredentials = true;
            };
            app.config(['$httpProvider', sso]);
        };

        return {
            type: 'config',
            func: SSOConfig
        };

    });

}(define));
