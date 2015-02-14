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
        './controller/ProductController',
        //'./directive/chart',
        './lang/lang_zh',
        './lang/lang_en',
    ], function(angular,
        Routes,
        ProductController,
        //chart,
        lang_zh,
        lang_en) {

        var moduleName = 'product';

        var module = angular.module(moduleName, []);

        module.controller('ProductController', ProductController);
        //module.directive('chart', chart);

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
