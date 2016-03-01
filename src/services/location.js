/* global: sessionStorage, localStorage*/

import wx from './wx';
import Router from 'vue-router';

export default {
    getLocation: function() {
        var storage_latitude = localStorage.getItem('latitude');
        var storage_longitude = localStorage.getItem('longitude');

        wx.getLocation(function(data) {
            var latitude = data.result.location.lat;
            var longitude = data.result.location.lng;
            var description = data.result.sematic_description;

            sessionStorage.setItem('wx_lat', latitude);
            sessionStorage.setItem('wx_lng', longitude);
            sessionStorage.setItem('wx_sematic_description', description);

            if (storage_latitude || storage_longitude ||
                storage_latitude === 'null' || storage_longitude === 'null') {
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);
                localStorage.setItem('description', description);

                Router.go('home');
            } else {
                // 如果localStorage里面经纬度不为空判断当前定位和用户设置的位置是否一致，不一致说明用户不在当前设置位置
                // 计算经度相差度大约0.027偏差视为更换了地址，不在百度地图定位偏差内(3km)
                if (Math.abs(storage_longitude - longitude) >= 0.027 || Math.abs(storage_latitude - latitude) >= 0.027) {
                    console.warn('这是定位有了变化');

                    Router.go({
                        name: 'home',
                        params: {
                            isChange: 1
                        }
                    });
                } else {
                    console.log('这是定位没有变化');

                    Router.go({
                        name: 'home',
                        params: {
                            isChange: 0
                        }
                    });
                }
            }
        });
    }
};
