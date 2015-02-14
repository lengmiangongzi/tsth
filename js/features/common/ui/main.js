/**
 *  Entrance of common ui
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['./business/main', './Alerts'], function(logic) {
        var args = [].slice.call(arguments, 1);
        return logic.concat(args);
    });

}(define));
