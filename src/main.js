import Vue from 'vue';
import Router from 'vue-router';
import App from './App';


// install router
Vue.use(Router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
