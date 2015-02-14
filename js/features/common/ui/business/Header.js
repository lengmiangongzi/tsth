/**
 *  Defines the Header
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define) {
    'use strict';

    var features = require.toUrl('features');

    define(['angular'], function(angular) {
        $('body').prepend('<ng-header></ng-header>');

        var moduleName = 'Hearder';

        var common = angular.module(moduleName, []);

        var dir = function($location) {

            return {
                restrict: 'E',
                scope: {},
                link: function($scope) {
                    var url = $location.url();
                    var url2 = url.slice(1, url.indexOf('?') + 1);
                    if (url2.indexOf('/') === 0) {
                        $scope.tag = url2;
                    } else {
                        $scope.tag = url2.slice(0, url2.indexOf('/'));
                    }
                    //console.log($scope.tag);
                    //$scope.tag = 'home';
                    $scope.toEmploy = function() {
                        $scope.tag = 'employ';
                        $location.url('employ');
                    };
                    $scope.toHome = function() {
                        $scope.tag = 'home';
                        $location.url('home');
                        //location.reload();
                    };
                    $scope.toInfo = function() {
                        $scope.tag = 'info';
                        $location.url('info/company');
                    };
                    $scope.toProduct = function() {
                        $scope.tag = 'product';
                        $location.url('product');
                    };
                    $scope.toRisk = function() {
                        $scope.tag = 'risk';
                        $location.url('risk/rule');
                    };
                    $scope.toContact = function() {
                        $scope.tag = 'contact';
                        $location.url('contact');
                    };
                    $scope.toNews = function() {
                        $scope.tag = 'news';
                        $location.url('news/companyNews');
                    };
                    $scope.login = function() {
                        $scope.headBu = 'login';
                    };
                    $scope.regist = function() {
                        $scope.headBu = 'regist';
                    };
                },
                templateUrl: features + '/common/ui/business/Header.html'
            };
        };


        common.directive('ngHeader', ['$location', dir]);
        return {
            type: 'feature',
            name: moduleName,
            lang: {
                zh: {

                },
                en: {
                    'aboutUs': 'about us'
                }
            }
        };

    });

})(define);
