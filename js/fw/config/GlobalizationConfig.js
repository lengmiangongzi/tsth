/**
 *  GlobalizationConfig collect i18n information from each feature and combine them
 *  with angular-translate.
 *
 *
 *  @author  Hao.Zuo
 *  @date    Nov 24th, 2014
 *
 */
(function(define) {
    'use strict';

    define(['lodash'], function(_) {

        var GlobalizationConfig = function(features, app) {

            if (!features || features.length === 0) {
                console.warn('No features loaded');
                return;
            }

            //config the i18n stuff

            var languages = {};

            var featureWithLang = _.filter(features, function(feature) {
                return feature.lang;
            });

            _.each(featureWithLang, function(feature) {
                _.each(feature.lang, function(value, key) {
                    if (!languages[key]) {
                        languages[key] = {};
                    }
                    _.assign(languages[key], value);
                });

            });

            //config router
            app.config(['$translateProvider', 'CONF',
                function($translateProvider, CONF) {
                    _.each(languages, function(value, key) {
                        $translateProvider.translations(key, value);
                    });
                    $translateProvider.preferredLanguage(CONF.defaultLang);
                    $translateProvider.fallbackLanguage(CONF.defaultLang);
                }
            ]);
        };

        return {
            type: 'config',
            func: GlobalizationConfig
        };

    });

}(define));
