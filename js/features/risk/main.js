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
        './directive/riskDirective',
        './directive/stratgeDirective',
        './directive/ruleDirective',
        './controller/RiskController',
        './lang/lang_zh',
        './lang/lang_en',
        './tag/tag_ch',
        './tag/tag_en',
    ], function(angular,
        Routes,
        riskDirective,
        stratgeDirective,
        ruleDirective,
        RiskController,
        lang_zh,
        lang_en,
        tag_ch,
        tag_en) {

        var moduleName = 'risk';

        var module = angular.module(moduleName, []);

        module.directive('risk', riskDirective);
        module.directive('stratge', stratgeDirective);
        module.directive('rule', ruleDirective);

        module.controller('RiskController', RiskController);



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
