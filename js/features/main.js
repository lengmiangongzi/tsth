/**
 *  Entrance of features
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['./common/main', './home/main', './employ/main', './info/main', './contact/main', './news/main', './product/main', './risk/main'], function(common, home, employ, info, contact, news, product, risk) {
        common.push(home);
        common.push(info);
        common.push(employ);
        common.push(product);
        common.push(contact);
        common.push(news);
        common.push(risk);
        return common;

    });

}(define));
