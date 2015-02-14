/**
 *  Defines the splash
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, $) {
    'use strict';

    var splashHtml = '<div class="mom-splash"></div>';

    define([], function() {

        var $body = $('body');

        var splash = {};

        splash.enable = function(theme) {
            $body.addClass('mom-splashing');
            $body.append(splashHtml);
            var $splash = $body.find('.mom-splash');
            if (theme === 'tailing') {
                $splash.append('<span>Loading</span>');
            }
            $splash.addClass(theme);
        };

        splash.destroy = function() {
            $body.removeClass('mom-splashing');
            $body.find('.mom-splash').remove();
        };

        return splash;
    });

})(define, jQuery);
