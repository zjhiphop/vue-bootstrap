/* global: wx */

import Vue from 'vue';
import mix from './mix';
import API from './api-const';

function error(error) {
    console.trace();
    alert('error');
    console.error('[WECHAT ERROR]', error);
}

export default {
    _inited: false,
    getSignCommon: function() {
        var nonceStr = mix.randomString();
        var timestamp = mix.timeStamp();
        var nurl = encodeURIComponent(location.href.replace(/&/g, ',,,'));
        var signURL = API.WECHAT_SIGN.replace('{ts}', timestamp)
            .replace('{url}', nurl)
            .replace('{ncstr}', nonceStr);

        Vue.http.jsonp(signURL, null, {jsonp: 'jsonpcallback'}).then(
            function(response) {
                wx.config({
                    debug: true,
                    appId: 'wxa0641282049ed265',
                    timestamp: timestamp,
                    nonceStr: nonceStr,
                    signature: response.data.sign.toLowerCase(),
                    jsApiList: [
                        'getLocation'
                    ]
                });
            },
            error);
    },
    init: function(cb) {
        var me = this;

        me.getSignCommon();
        wx.ready(function() {
            console.log('微信sdk成功!');
            me._inited = true;

            if (cb) {
                cb();
            }
        });

        wx.error(error);
    },
    _getLocation: function(cb) {
        wx.getLocation({
            // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            type: 'wgs84',
            success: function(res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                // var speed = res.speed; // 速度，以米/每秒计
                // var accuracy = res.accuracy; // 位置精度

                Vue.http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&callback=renderReverse&location=' + latitude + ',' + longitude + '&output=json&pois=0&coordtype=wgs84ll')
                   .then(cb, error);

                localStorage.setItem('loginTime', (new Date()).getTime());
            },
            error: error
        });
    },
    getLocation: function(callback) {
        var me = this;

        if (!me._inited) {
            me.init(function() {
                me._getLocation(callback);
            });
        } else {
            me._getLocation(callback);
        }
    }
};
