/**
 *  Defines the Globalization
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'GlobalizationHandler';

        var common = angular.module(moduleName, []);

        common.config(['$httpProvider',
            function($httpProvider) {
                $httpProvider.interceptors.push(['$translate', function($translate) {
                    return {
                        'request': function(config) {
                            if (!config.params) {
                                config.params = {};
                            }
                            config.params.lang = $translate.use();
                            return config;
                        }
                    };
                }]);
            }
        ]);

        common.run(['$rootScope', '$translate', '$location', 'CONF',
            function($rootScope, $translate, $location, CONF) {
                $rootScope.$on('$routeChangeStart', function(event) {

                    if ($location.path() === '/') {
                        return;
                    }

                    if (!$location.search().lang && $translate.use() !== CONF.defaultLang) {
                        $location.search('lang', $translate.use());
                        event.preventDefault();
                        return;
                    }

                    if (CONF.supportedLangs.indexOf($location.search().lang) < 0) {
                        $location.search('lang', CONF.defaultLang);
                        event.preventDefault();
                        return;
                    }
                    if ($translate.use() !== $location.search().lang) {
                        $translate.use($location.search().lang);
                        event.preventDefault();
                        return;
                    }
                });
            }
        ]);

        return {
            type: 'feature',
            name: moduleName
        };

    });

})(define);
