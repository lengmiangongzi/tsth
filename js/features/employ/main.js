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
        './controller/EmployController',
        './lang/lang_zh',
        './lang/lang_en',
    ], function(angular,
        Routes,
        EmployController,
        lang_zh,
        lang_en) {

        var moduleName = 'employ';

        var module = angular.module(moduleName, []);

        module.controller('EmployController', EmployController);

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
