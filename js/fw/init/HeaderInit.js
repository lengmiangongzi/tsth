/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    "use strict";

    define(['achy/utils/head', 'config/AppConfig'], function(head, config) {
        head.title('桐昇通惠');
        var $base = $('head base');
        var baseUrl = '/' + (config.func().app ? config.func().app + '/' : '');
        if ($base.length === 0) {
            head.base({
                'href': baseUrl
            });
        } else {
            $base.attr({
                'href': baseUrl
            });
        }

        head.meta({
            'charset': 'utf-8'
        });
        head.meta({
            'name': 'viewport',
            'content': 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui'
        });
        head.meta({
            'name': 'renderer',
            'content': 'webkit'
        });
        head.meta({
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge,chrome=1'
        });
        head.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        head.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });

        head.favicon('img/common/logo.png');

        return {
            type: 'init'
        };

    });

}(define));
