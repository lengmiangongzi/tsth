/**
 *  BodyConfig set ng-view as only part of index.html.
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        $('body').append('<ng-view class="slide" autoscroll="true"></ng-view>');

        var config = function() {};

        return {
            type: 'config',
            func: config
        };

    });

}(define));
