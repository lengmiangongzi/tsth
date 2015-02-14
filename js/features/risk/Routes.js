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
    /*define({
        'pageSize': 20,
        'router': [{
            abstract: true,
            defaultPage: true,
            isNavigator: true,
            state: 'info',
            url: '/info',
            controller: 'InfoController',
            templateUrl: features + '/partials/Info.html'
        }, {
            abstract: false,
            defaultPage: true,
            isNavigator: true,
            state: 'info.company',
            url: '/company',
            parent: 'info',
            controller: 'CompanyController',
            templateUrl: features + '/partials/company.html'
        }, {
            abstract: false,
            defaultPage: false,
            isNavigator: true,
            state: 'info.risk',
            url: '/risk',
            parent: 'info',
            controller: 'RiskController',
            templateUrl: features + '/partials/risk.html'
        }, {
            abstract: false,
            defaultPage: false,
            isNavigator: true,
            state: 'info.rule',
            url: '/rule',
            parent: 'info',
            controller: 'RuleController',
            templateUrl: features + '/partials/rule.html'
        }, {
            abstract: false,
            defaultPage: false,
            isNavigator: true,
            state: 'info.stratge',
            url: '/stratge',
            parent: 'info',
            controller: 'StratgeController',
            templateUrl: features + '/partials/stratge.html'
        }, {
            abstract: false,
            defaultPage: false,
            isNavigator: true,
            state: 'info.team',
            url: '/team',
            parent: 'info',
            controller: 'TeamController',
            templateUrl: features + '/partials/team.html'
        }]
    });*/


    define([], function() {

        return [{
            isDefault: false,
            when: '/risk/:riskTag',
            controller: 'RiskController',
            templateUrl: features + '/risk/partials/Risk.html',
        }];
    });

}(define, require));
