import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './components/App.vue';

Vue.use(VueRouter);


Vue.prototype.$testUser = {
  logged: false,
  premium: false,
};

new Vue({
  render: h => h(App),
}).$mount('#root');
