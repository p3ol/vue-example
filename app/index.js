import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from './routes';

import App from './components/App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.prototype.$testUser = {
  logged: false,
  premium: false,
};

new Vue({
  router,
  render: h => h(App),
}).$mount('#root');
