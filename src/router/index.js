import Vue from 'vue';
import Router from 'vue-router';
import Editor from '../views/edit/Editor'; // don't use .vue extension
import Top from '../views/top/Top'; // don't use .vue extension

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top', component: Top },
    { path: '/edit', component: Editor },
    { path: '*', redirect: '/top' },
  ],
});
