/**
 *  Defines the ResponseResolver
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'ResponseResolver';

        var common = angular.module(moduleName, []);

        common.run(['httpResolver',
            function(httpResolver) {
                httpResolver.set(function(deferred, data, status, headers, config) {
                    // TODO: here might be modified with backend logic
                    if (data && data.code !== 1) {
                        deferred.reject({
                            data: data,
                            status: status,
                            headers: headers,
                            config: config
                        });
                        return;
                    }
                    deferred.resolve({
                        data: data.data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
        ]);

        return {
            type: 'featuresdfg',
            name: moduleName
        };

    });

})(define);
