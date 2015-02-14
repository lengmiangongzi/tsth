/**
 *  A directive which helps you easily show a baidu-map on your page.
 *
 *
 *  Usages:
 *
 *      <mg-map options="options"></mg-map>
 *
 *      options: The configurations for the map
 *            .width[Number]{M}:        The width of the map
 *            .height[Number]{M}:       The height of the map
 *            .center.longitude[Number]{M}: The longitude of the center point
 *            .center.latitude[Number]{M}: The latitude of the center point
 *            .zoom[Number]{O}:         Map's zoom level. This must be a number between 3 and 19
 *            .navCtrl[Boolean]{O}:     Whether to add a NavigationControl to the map
 *            .scaleCtrl[Boolean]{O}:   Whether to add a ScaleControl to the map
 *            .overviewCtrl[Boolean]{O}: Whether to add a OverviewMapControl to the map
 *            .enableScrollWheelZoom[Boolean]{O}: Whether to enableScrollWheelZoom to the map
 *            .markers[Array]{O}:       An array of marker which will be added on the map
 *                   .longitude{M}:                The longitude of the marker
 *                   .latitude{M}:                 The latitude of the marker
 *                   .width{O}:                    The width of the marker
 *                   .height{O}:                   The height of the marker
 *                   .icon[String]{O}:             The icon's url for the marker
 *                   .title[String]{O}:            The title on the infowindow displayed once you click the marker
 *                   .content[String]{O}:          The content on the infowindow displayed once you click the marker
 *            .onloaded[callback]{M}: A callback which will be invoked once the map is loaded
 *
 *
 *
 *  @author      Howard.Zuo
 *  @copyright   April 10, 2014
 *
 *
 */
(function(define, angular) {
    "use strict";

    var checkNull = function(obj) {
        return obj === null || obj === undefined;
    };

    var checkMandatory = function(prop, desc) {
        if (!prop) {
            throw new Error(desc);
        }
    };

    /**
     * Register the mgMap construction function with RequireJS
     *
     */
    define([], function() {
        /**
         * Construction function
         * Does not need any AngularJS DI
         *
         * @constructor
         */
        var mgMap = function($timeout) {

            // Return configured, directive instance

            return {
                restrict: 'E',
                scope: {
                    'options': '='
                },
                link: function($scope, element, attrs) {

                    checkMandatory($scope.options.width, 'options.width must be set');
                    checkMandatory($scope.options.height, 'options.height must be set');
                    checkMandatory($scope.options.center, 'options.center must be set');
                    checkMandatory($scope.options.center.longitude, 'options.center.longitude must be set');
                    checkMandatory($scope.options.center.latitude, 'options.center.latitude must be set');

                    var ops = _.extend({
                        navCtrl: true,
                        scaleCtrl: true,
                        overviewCtrl: true,
                        enableScrollWheelZoom: true,
                        zoom: 10
                    }, $scope.options);

                    element.find('div').width(ops.width);
                    element.find('div').height(ops.height);

                    var map;
                    var mapOps;

                    var mapInit = function() {
                        // create map instance
                        mapOps = {
                            level: ops.zoom,
                            center: new AMap.LngLat(ops.center.longitude, ops.center.latitude),
                            scrollWheel: ops.enableScrollWheelZoom
                        };

                        map = new AMap.Map(element.find('div')[0], mapOps);

                        if (ops.navCtrl) {
                            // add navigation control
                            map.plugin(["AMap.ToolBar"], function() {
                                var toolBar = new AMap.ToolBar();
                                map.addControl(toolBar);
                            });
                        }
                        if (ops.scaleCtrl) {
                            // add scale control
                            map.plugin(["AMap.Scale"], function() {
                                var scale = new AMap.Scale();
                                map.addControl(scale);
                            });
                        }
                        if (ops.overviewCtrl) {
                            //add overview map control
                            map.plugin(["AMap.OverView"], function() {
                                var overView = new AMap.OverView({
                                    visible: false
                                });
                                map.addControl(overView);
                            });
                        }

                        if (!ops.markers) {
                            return;
                        }
                        //create markers

                        var openInfoWindow = function(map, marker, infoWin) {
                            return function(e) {
                                infoWin.open(map, marker.getPosition());
                                console.log(infoWin);
                            };
                        };
                        for (var i in ops.markers) {
                            var marker = ops.markers[i];
                            var pt = new AMap.LngLat(marker.longitude, marker.latitude);
                            var marker2;
                            if (marker.icon) {
                                marker2 = new AMap.Marker({
                                    icon: marker.icon,
                                    position: pt
                                });
                            } else {
                                marker2 = new AMap.Marker({
                                    position: pt
                                });
                            }

                            // add marker to the map
                            marker2.setMap(map);

                            if (!marker.title && !marker.content) {
                                return;
                            }
                            var infoWindow2 = new AMap.InfoWindow({
                                isCustom: false,
                                autoMove: true,
                                content: "<p>" + (marker.title ? marker.title : '') + "</p></br><p>" + (marker.content ? marker.content : '') + "</p>"
                            });
                            if (marker.width && marker.height) {
                                infoWindow2.setSize(new AMap.Size(marker.width, marker.height));
                            }
                            AMap.event.addListener(marker2, "click", openInfoWindow(map, marker2, infoWindow2));
                        }
                    };

                    var promise;

                    var failback = function() {
                        try {
                            mapInit();
                            if ($scope.options.onloaded) {
                                $scope.options.onloaded();
                            }
                        } catch (err) {
                            promise = $timeout(function() {
                                failback();
                            }, 5000);
                        }
                    };

                    failback();


                    $scope.$on('$destroy', function() {
                        if (promise) {
                            $timeout.cancel(promise);
                        }
                        if (map && map.destroy) {
                            map.destroy();
                        }
                    });

                },
                template: '<div></div>'
            };
        };

        // Publish the mgMap directive construction function
        return ['$timeout', mgMap];

    });

})(define, angular);
