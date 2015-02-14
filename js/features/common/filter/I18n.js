/**
 *  Defines the i18n
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'I18NFilter';

        var common = angular.module(moduleName, []);

        common.filter('i18n', ['$translate',
            function($translate) {
                return function(input) {
                    var lang = $translate.use();
                    if (!input) {
                        return '';
                    }
                    var url = input + (input.indexOf('?') > -1 ? '&' : '?') + 'lang=' + lang;
                    return url;
                };
            }
        ]);

        return {
            type: 'feature',
            name: moduleName
        };

    });

})(define);
