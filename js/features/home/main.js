/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'angular',
        './Routes',
        './controller/HomeController',
        './directive/chSlick',
        './lang/lang_zh',
        './lang/lang_en',
    ], function(angular,
        Routes,
        HomeController,
        chSlick,
        lang_zh,
        lang_en) {

        var moduleName = 'home';

        var module = angular.module(moduleName, []);

        module.controller('HomeController', HomeController);
        module.directive('chSlick', chSlick);

        return {
            type: 'feature',
            name: moduleName,
            routes: Routes,
            lang: {
                zh: lang_zh,
                en: lang_en
            }
        };

    });

}(define));
