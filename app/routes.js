import Home from './components/Home.vue';
import Free from './components/Free.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/free', component: Free },
  { path: '*', redirect: '/' },
];
