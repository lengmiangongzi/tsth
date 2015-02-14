/**
 * System config
 * define all paths for fire, this is the main entrance of TSTH.
 *
 *  @author  Howard.Zuo
 *  @date    Dec 20th, 2014
 */
(function(require) {
    'use strict';

    var bizBase = require.toUrl('');
    var baseUrl = bizBase + '/js';

    require.config({
        paths: {
            'business/js/main': baseUrl + '/main',
            //'business/css/main': bizBase + '/css/main',
            //'business/img/': bizBase + '/css/img/',
            'etc': bizBase + '/etc',
            'js': baseUrl,
            'libs': baseUrl + '/libs',
            'fw': baseUrl + '/fw',
            'ext': baseUrl + '/fw/ext',
            'init': baseUrl + '/fw/init',
            'config': baseUrl + '/fw/config',
            'service': baseUrl + '/fw/service',
            'features': baseUrl + '/features',
            'angular': baseUrl + '/bower_components/angular/angular.min',
            'angular-animate': baseUrl + '/bower_components/angular-animate/angular-animate.min',
            'angular-route': baseUrl + '/bower_components/angular-route/angular-route.min',
            'angular-translate': baseUrl + '/bower_components/angular-translate/angular-translate.min',
            'angular-sweetalert': baseUrl + '/bower_components/angular-h-sweetalert/dist/ngSweetAlert.min',
            'sweetalert': baseUrl + '/bower_components/sweetalert/lib/sweet-alert.min',
            'sweetalertcss': baseUrl + '/bower_components/sweetalert/lib/sweet-alert',
            'animateCss': baseUrl + '/bower_components/animate.css/animate.min',
            'slick': baseUrl + '/bower_components/slick-carousel/slick/slick.min',
            'splash': baseUrl + '/libs/splash',
            'slick-css': baseUrl + '/bower_components/slick-carousel/slick/slick',
            'highcharts': baseUrl + '/bower_components/Highcharts-4.0.1/js/highcharts'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-animate': {
                deps: ['angular']
            },
            'angular-route': {
                deps: ['angular']
            },
            'angular-sweetalert': {
                deps: ['angular', 'sweetalert']
            },
            'sweetalert': {
                deps: ['css!sweetalertcss']
            },
            'angular-translate': {
                deps: ['angular']
            },
            'slick': {
                deps: ['jquery']
            },
            'highcharts': {
                deps: ['jquery']
            },
        },
        map: {
            '*': {
                underscore: 'lodash'
            }
        }

    });

    require(['init/main']);

    //enable splash
    require(['splash', 'css!splash'], function(splash) {
        splash.enable('audio-wave');
    });

    require(['business/js/main']);

}(require));
