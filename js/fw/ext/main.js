/**
 *  Return all information of external angular resources
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define([
        'bootstrapjs',
        'angular-animate',
        'angular-route',
        'angular-sweetalert',
        'angular-translate',
        'css!sweetalertcss',
        'css!yestrap-light',
        'css!fontawesome',
        'css!animateCss'
    ], function() {

        return {
            type: 'ext',
            modules: [{
                name: 'ngAnimate'
            }, {
                name: 'ngRoute'
            }, {
                name: 'hSweetAlert'
            }, {
                name: 'pascalprecht.translate'
            }]
        };

    });

}(define));
