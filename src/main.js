/* global: require, wx */

// vue related libs
import Vue from 'vue';
import Resource from 'vue-resource';
import Router from 'vue-router';

// vue components
import App from './components/App.vue';
import Location from './components/Location.vue';
import Home from './components/Home.vue';

// http service
import HTTPInterceptor from './services/http-intercept';

// scss
require('./scss/app.scss');

// Install plugins
Vue.use(Router);
Vue.use(Resource);
HTTPInterceptor.start();

// Set up a new router
var router = new Router();

// Route config
router.map({
    '/location': {
        name: 'location',
        component: Location
    },
    '/home': {
        name: 'home',
        component: Home
    }
});

// For every new route scroll to the top of the page
router.beforeEach(function() {
    window.scrollTo(0, 0);
});

// If no route is matched redirect home
router.redirect({
    '*': '/home'
});

// Start up our app
/* eslint-disable no-new */
router.start(App, '#app');

