/**
 *  Defines the Alerts
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'Alerts';

        var common = angular.module(moduleName, []);

        common.run(['notify', 'sweet', '$translate',
            function(notify, sweet, $translate) {
                notify.on('modal', function(data) {

                    $translate([data.title, data.message]).then(function(values) {
                        sweet.show({
                            title: values[data.title],
                            text: values[data.message],
                            type: data.type,
                            showCancelButton: data.showCancelButton
                        }, data.callback);
                    });
                });

            }
        ]);

        return {
            type: 'feature',
            name: moduleName
        };

    });

})(define);
