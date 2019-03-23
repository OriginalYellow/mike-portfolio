/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */

require('typeface-ibm-plex-mono');
import './assets/main.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
