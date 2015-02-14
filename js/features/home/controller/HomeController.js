/**
 *  Defines the HomeController controller
 *
 *  @author  Hao.Zuo
 *  @date    Dec 20th, 2014
 *
 */
(function(define, $) {
    'use strict';

    /**
     * Register the HomeController class with RequireJS
     */
    define(['lodash'], function(_) {

        /**
         * @constructor
         */
        var HomeController = function($scope, $interval) {

            $scope.tag = 'home';
            $scope.sliderOptions = {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                autoplay: true,
                dots: true,
                fade: false,
                arrows: false,
                autoplaySpeed: 3000,
                //vertical: false;
                //useCSS: (window.browser.isIE && window.browser.version < 10) ? false : true
            };
            $scope.stockOptions = {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false,
                fade: false,
                arrows: true,
                infinite: true,
                centerMode: false,
            };
            $scope.url1 = 'http://image.sinajs.cn/newchart/daily/n/sh601006.gif';
            $scope.url2 = 'http://image.sinajs.cn/newchart/min/n/sh000001.gif';
            $scope.url3 = "http://image.sinajs.cn/newchart/daily/n/sh000001.gif";
            $scope.url4 = "http://image.sinajs.cn/newchart/weekly/n/sh000001.gif";
            $scope.url5 = "http://image.sinajs.cn/newchart/monthly/n/sh000001.gif";
            $scope.url6 = "http://image.sinajs.cn/newchart/hk_stock/min/01196.gif?1288616934000";
            $scope.interval = $interval(function() {
                $scope.refresh = Date.parse(new Date());
                $scope.url1 = 'http://image.sinajs.cn/newchart/daily/n/sh601006.gif' + $scope.refresh;
                $scope.url2 = 'http://image.sinajs.cn/newchart/min/n/sh000001.gif' + $scope.refresh;
                $scope.url3 = "http://image.sinajs.cn/newchart/daily/n/sh000001.gif" + $scope.refresh;
                $scope.url4 = "http://image.sinajs.cn/newchart/weekly/n/sh000001.gif" + $scope.refresh;
                $scope.url5 = "http://image.sinajs.cn/newchart/monthly/n/sh000001.gif" + $scope.refresh;
                $scope.url6 = "http://image.sinajs.cn/newchart/hk_stock/min/01196.gif?1288616934000" + $scope.refresh;
            }, 3000);


        };

        return ['$scope', '$interval', HomeController];

    });

})(define, jQuery);
