/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['tpl!etc/config.json'], function(tpl) {

        var config = JSON.parse(tpl());
        var def = function(features, app) {
            if (app) {
                app.constant('CONF', config);
            }
            return config;
        };

        return {
            type: 'config',
            func: def
        };

    });

}(define));
