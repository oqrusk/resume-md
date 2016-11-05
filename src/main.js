import Vue from 'vue';
import App from './App';
// import store from './store'
import router from './router';
// import { sync } from 'vuex-router-sync'
// import * as filters from './filters'


/* eslint-disable no-new */
const app = new Vue({
  router,
  // el: '#app',
  template: '<App/>',
  components: { App },
}).$mount('#app');


export { app, router };

