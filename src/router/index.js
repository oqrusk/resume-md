import Vue from 'vue';
import Router from 'vue-router';
import Editor from '../components/edit/Editor'; // don't use .vue extension
import Hello from '../components/Hello'; // don't use .vue extension
import TestView from '../views/testView'; // don't use .vue extension

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top', component: TestView },
    { path: '/hello', component: Hello },
    { path: '/edit', component: Editor },
    { path: '*', redirect: '/top' },
  ],
});
