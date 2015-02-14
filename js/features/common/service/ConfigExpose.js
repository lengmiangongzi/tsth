/**
 *  Defines the ConfigExpose
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'ConfigExposeModule';

        var common = angular.module(moduleName, []);

        common.run(['$rootScope', 'CONF',
            function($rootScope, CONF) {
                $rootScope.CONF = CONF;
            }
        ]);

        return {
            type: 'feature',
            name: moduleName
        };

    });

})(define);
