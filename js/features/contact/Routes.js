/**
 *
 *  Routes module expose route information used in home feature
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: true,
            when: '/contact',
            controller: 'ContactController',
            templateUrl: features + '/contact/partials/Contact.html'
        }];
    });

}(define, require));
