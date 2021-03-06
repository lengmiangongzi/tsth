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
        './controller/ContactController',
        './directive/mgMap',
        './lang/lang_zh',
        './lang/lang_en',
    ], function(angular,
        Routes,
        ContactController,
        mgMap,
        lang_zh,
        lang_en) {

        var moduleName = 'contact';

        var module = angular.module(moduleName, []);

        module.controller('ContactController', ContactController);
        module.directive('mgMap', mgMap);

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
