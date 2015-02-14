/**
 *  Defines the sysErrHandlers
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var moduleName = 'SystemErrorHttpHandler';

        var common = angular.module(moduleName, []);

        common.run(['httpHandler', 'notify',
            function(httpHandler, notify) {
                httpHandler.push(function(data, status, headers, config) {
                    notify.push({
                        category: 'modal',
                        type: 'error',
                        title: 'WARNING_TITLE',
                        message: 'SERVER_ERROR_MESSAGE'
                    });
                    return false; //falsy means break at this handler
                }, 'error');
            }
        ]);

        return {
            type: 'feature',
            name: moduleName,
            lang: {
                zh: {
                    WARNING_TITLE: '温馨提示',
                    SERVER_ERROR_MESSAGE: '服务器出现异常，请刷新浏览器重试；如果问题仍然存在，请尝试联系管理员'
                },
                en: {
                    WARNING_TITLE: 'Notification',
                    SERVER_ERROR_MESSAGE: 'Server error, please refresh the browser to retry. And contact the administrator if issue not solved.'
                }
            }
        };

    });

})(define);
