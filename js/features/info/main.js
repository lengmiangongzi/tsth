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
        './directive/companyDirective',
        './directive/teamDirective',
        './controller/InfoController',
        './lang/lang_zh',
        './lang/lang_en',
        './tag/tag_ch',
        './tag/tag_en',
    ], function(angular,
        Routes,
        companyDirective,
        teamDirective,
        InfoController,
        lang_zh,
        lang_en,
        tag_ch,
        tag_en) {

        var moduleName = 'info';

        var module = angular.module(moduleName, []);

        module.directive('company', companyDirective);
        module.directive('team', teamDirective);

        module.controller('InfoController', InfoController);



        return {
            type: 'feature',
            name: moduleName,
            routes: Routes,
            lang: {
                zh: lang_zh,
                en: lang_en
            },
            tag: {
                zh: tag_ch,
                en: tag_en
            }
        };

    });

}(define));
