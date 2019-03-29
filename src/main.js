/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */

require('typeface-ibm-plex-mono');
import 'hamburgers/dist/hamburgers.css';
import VueAnime from 'vue-animejs';
import VueMq from 'vue-mq';
import './assets/main.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAnime);

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: Infinity,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
