/**
 *  Entrance of common service
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 8th, 2014
 *
 */
(function(define) {
    'use strict';

    define([
        './http/main',
        './Globalization',
        './ConfigExpose'
    ], function(http, globalization, configExpose) {
        var values = http.concat([globalization, configExpose]);
        return values;
    });

}(define));
