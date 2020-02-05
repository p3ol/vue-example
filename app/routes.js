import Home from './components/Home.vue';
import Premium from './components/Premium.vue';
import Free from './components/Free.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/premium', component: Premium },
  { path: '/free', component: Free },
  { path: '*', redirect: '/' },
];
