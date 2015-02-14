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
        './controller/NewsController',
        './directive/companyNews',
        './directive/industryNews',
        '../news/service/getNews',
        './lang/lang_zh',
        './lang/lang_en',
    ], function(angular,
        Routes,
        NewsController,
        companyNews,
        industryNews,
        getNews,
        lang_zh,
        lang_en) {

        var moduleName = 'news';

        var module = angular.module(moduleName, []);

        module.controller('NewsController', NewsController);
        module.directive('companynews', companyNews);
        module.directive('industrynews', industryNews);
        module.service('getNews', getNews);


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
