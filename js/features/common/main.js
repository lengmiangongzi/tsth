/**
 *  Entrance of common service
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['./filter/main', './service/main', './ui/main'], function(filter, service, ui) {
        return filter.concat(service).concat(ui);
    });

}(define));
