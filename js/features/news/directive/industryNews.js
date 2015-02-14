(function(define) {
    restrict: 'E';
    define([], function() {
        var industryNews = function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/features/news/directive/industryNews.html',
                link: function($scope) {
                    $scope.industryCon = [{
                        picUrl: 'img/news/industry1.png',
                        content: '桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化 '
                    }, {
                        picUrl: 'img/news/industry2.png',
                        content: '桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化 '
                    }, {
                        picUrl: 'img/news/industry3.png',
                        content: '桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化基金经理创办的高科技资产管桐昇通惠是由美国资深量化 '
                    }];
                }
            }
        }
        return [industryNews];
    })
})(define)
