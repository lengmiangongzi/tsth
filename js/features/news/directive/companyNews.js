(function(define) {
    "use strict";
    define([], function() {
        var companyNews = function($http, getNews) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/features/news/directive/companyNews.html',
                $scope: {
                    page: '='
                },
                link: function($scope) {
                        $scope.listNumber = 6; //list numbers per  page
                        $scope.showPage = 3; //page numbers show
                        $scope.highlight = 0;
                        $scope.isNew = false;
                        $scope.disp = [];
                        $scope.first = 0;
                        $scope.totalNumber = $scope.newsContent.length;
                        $scope.pages = [];
                        // howe many pages?
                        $scope.pageNumber = Math.ceil($scope.totalNumber / $scope.listNumber);
                        $scope.pageContent = $scope.newsContent.slice(0, $scope.listNumber);
                        for (var i = 0; i < $scope.pageNumber; i++) {
                            $scope.pages.push(i);
                            if (i < 2) {
                                $scope.disp.push(true);
                            } else {
                                $scope.disp.push(false);
                            }
                        }
                        if ($scope.disp[$scope.pageNumber - 1]) {
                            $scope.rightDisp = false;
                        } else {
                            $scope.rightDisp = true;
                        }
                        if ($scope.disp[0]) {
                            $scope.leftDisp = false;
                        } else {
                            $scope.leftDisp = true;
                        }
                        $scope.isNew = function(date) {
                            $scope.dateNow = new Date();
                            $scope.dateNews = new Date(date);
                            $scope.days = ($scope.dateNow.getTime() - $scope.dateNews.getTime()) / (24 * 3600 * 1000);
                            if ($scope.days < 2) {
                                return true;
                            } else {
                                return false;
                            }
                        };

                        $scope.selectPage = function(number) {
                            $scope.highlight = number;
                            $scope.first = number * $scope.listNumber;
                            if (($scope.first + parseInt($scope.listNumber)) < $scope.newsContent.length) {
                                $scope.pageContent = $scope.newsContent.slice($scope.first, $scope.first + parseInt($scope.listNumber));
                            } else {
                                $scope.pageContent = $scope.newsContent.slice($scope.first);
                            }
                            for (var i = 0; i < $scope.disp.length; i++) {
                                if (Math.abs(i - number) < 2) {
                                    $scope.disp[i] = true;
                                } else {
                                    $scope.disp[i] = false;
                                }
                            }
                            if ($scope.disp[$scope.pages.length - 1]) {
                                $scope.rightDisp = false;
                            } else {
                                $scope.rightDisp = true;
                            }
                            if ($scope.disp[0]) {
                                $scope.leftDisp = false;
                            } else {
                                $scope.leftDisp = true;
                            }
                        };
                        //move to the rightPage
                        $scope.rightNext = function() {
                            for (var i = $scope.disp.length - 1; i > -1; i--) {
                                if ($scope.disp[i]) {
                                    $scope.selectPage(i);
                                    return;
                                }
                            }
                        };
                        //move to the leftPage
                        $scope.leftNext = function() {
                            for (var i = 1; i < $scope.disp.length; i++) {
                                if ($scope.disp[i]) {
                                    $scope.selectPage(i);
                                    return;
                                }
                            }
                        };

                    }
                    // end  of link
            };
        };
        return ['$http', 'getNews', companyNews];
    });
})(define);
