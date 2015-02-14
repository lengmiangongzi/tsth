/**
 *  Entrance of init
 *
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['./RouterConfig', './SSOConfig', './BodyConfig', './AppConfig', './GlobalizationConfig'], function() {
        return [].slice.call(arguments, 0);
    });

}(define));
