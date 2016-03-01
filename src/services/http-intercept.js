/**
 * Created by Jade on 2/25/16.
 */
import Vue from 'vue';

export default {
    start: function() {
        Vue.http.interceptors.push({

            request: function(request) {
                return request;
            },

            response: function(response) {
                return response;
            }

        });
    }
};
